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
import { UserAddressController } from "../userAddress.controller";
import { UserAddressService } from "../userAddress.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  id: 42,
  isPrimary: "true",
  pincode: "examplePincode",
  state: "exampleState",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  id: 42,
  isPrimary: "true",
  pincode: "examplePincode",
  state: "exampleState",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addressLine1: "exampleAddressLine1",
    addressLine2: "exampleAddressLine2",
    city: "exampleCity",
    country: "exampleCountry",
    createdAt: new Date(),
    id: 42,
    isPrimary: "true",
    pincode: "examplePincode",
    state: "exampleState",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  id: 42,
  isPrimary: "true",
  pincode: "examplePincode",
  state: "exampleState",
  updatedAt: new Date(),
};

const service = {
  createUserAddress() {
    return CREATE_RESULT;
  },
  userAddresses: () => FIND_MANY_RESULT,
  userAddress: ({ where }: { where: { id: string } }) => {
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

describe("UserAddress", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserAddressService,
          useValue: service,
        },
      ],
      controllers: [UserAddressController],
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

  test("POST /userAddresses", async () => {
    await request(app.getHttpServer())
      .post("/userAddresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userAddresses", async () => {
    await request(app.getHttpServer())
      .get("/userAddresses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userAddresses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userAddresses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userAddresses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userAddresses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userAddresses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userAddresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userAddresses")
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
