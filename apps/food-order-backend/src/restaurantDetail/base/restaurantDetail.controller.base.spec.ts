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
import { RestaurantDetailController } from "../restaurantDetail.controller";
import { RestaurantDetailService } from "../restaurantDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  deliveryCharge: 42.424242424,
  deliveryTime: "exampleDeliveryTime",
  description: "exampleDescription",
  id: 42,
  imageUrl: "exampleImageUrl",
  minOrderValue: 42.424242424,
  rating: 42.424242424,
  reviewCount: 42,
};
const CREATE_RESULT = {
  deliveryCharge: 42.424242424,
  deliveryTime: "exampleDeliveryTime",
  description: "exampleDescription",
  id: 42,
  imageUrl: "exampleImageUrl",
  minOrderValue: 42.424242424,
  rating: 42.424242424,
  reviewCount: 42,
};
const FIND_MANY_RESULT = [
  {
    deliveryCharge: 42.424242424,
    deliveryTime: "exampleDeliveryTime",
    description: "exampleDescription",
    id: 42,
    imageUrl: "exampleImageUrl",
    minOrderValue: 42.424242424,
    rating: 42.424242424,
    reviewCount: 42,
  },
];
const FIND_ONE_RESULT = {
  deliveryCharge: 42.424242424,
  deliveryTime: "exampleDeliveryTime",
  description: "exampleDescription",
  id: 42,
  imageUrl: "exampleImageUrl",
  minOrderValue: 42.424242424,
  rating: 42.424242424,
  reviewCount: 42,
};

const service = {
  createRestaurantDetail() {
    return CREATE_RESULT;
  },
  restaurantDetails: () => FIND_MANY_RESULT,
  restaurantDetail: ({ where }: { where: { id: string } }) => {
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

describe("RestaurantDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RestaurantDetailService,
          useValue: service,
        },
      ],
      controllers: [RestaurantDetailController],
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

  test("POST /restaurantDetails", async () => {
    await request(app.getHttpServer())
      .post("/restaurantDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /restaurantDetails", async () => {
    await request(app.getHttpServer())
      .get("/restaurantDetails")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /restaurantDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/restaurantDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /restaurantDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/restaurantDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /restaurantDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/restaurantDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/restaurantDetails")
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
