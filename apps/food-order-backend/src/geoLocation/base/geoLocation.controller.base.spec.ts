import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { GeoLocationController } from "../geoLocation.controller";
import { GeoLocationService } from "../geoLocation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  city: "exampleCity",
  country: "exampleCountry",
  id: 42,
  initialSignon: "true",
  latitude: 42.424242424,
  longitude: 42.424242424,
  postalCode: "examplePostalCode",
  state: "exampleState",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  city: "exampleCity",
  country: "exampleCountry",
  id: 42,
  initialSignon: "true",
  latitude: 42.424242424,
  longitude: 42.424242424,
  postalCode: "examplePostalCode",
  state: "exampleState",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    city: "exampleCity",
    country: "exampleCountry",
    id: 42,
    initialSignon: "true",
    latitude: 42.424242424,
    longitude: 42.424242424,
    postalCode: "examplePostalCode",
    state: "exampleState",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  city: "exampleCity",
  country: "exampleCountry",
  id: 42,
  initialSignon: "true",
  latitude: 42.424242424,
  longitude: 42.424242424,
  postalCode: "examplePostalCode",
  state: "exampleState",
};

const service = {
  createGeoLocation() {
    return CREATE_RESULT;
  },
  geoLocations: () => FIND_MANY_RESULT,
  geoLocation: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("GeoLocation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GeoLocationService,
          useValue: service,
        },
      ],
      controllers: [GeoLocationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /geoLocations", async () => {
    await request(app.getHttpServer())
      .post("/geoLocations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /geoLocations", async () => {
    await request(app.getHttpServer())
      .get("/geoLocations")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /geoLocations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/geoLocations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /geoLocations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/geoLocations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /geoLocations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/geoLocations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/geoLocations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
