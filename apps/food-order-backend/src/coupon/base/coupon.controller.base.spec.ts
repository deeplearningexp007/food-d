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
import { CouponController } from "../coupon.controller";
import { CouponService } from "../coupon.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  discountPercentage: 42.424242424,
  expirationDate: new Date(),
  id: 42,
  isActive: "true",
};
const CREATE_RESULT = {
  code: "exampleCode",
  discountPercentage: 42.424242424,
  expirationDate: new Date(),
  id: 42,
  isActive: "true",
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    discountPercentage: 42.424242424,
    expirationDate: new Date(),
    id: 42,
    isActive: "true",
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  discountPercentage: 42.424242424,
  expirationDate: new Date(),
  id: 42,
  isActive: "true",
};

const service = {
  createCoupon() {
    return CREATE_RESULT;
  },
  coupons: () => FIND_MANY_RESULT,
  coupon: ({ where }: { where: { id: string } }) => {
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

describe("Coupon", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CouponService,
          useValue: service,
        },
      ],
      controllers: [CouponController],
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

  test("POST /coupons", async () => {
    await request(app.getHttpServer())
      .post("/coupons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
      });
  });

  test("GET /coupons", async () => {
    await request(app.getHttpServer())
      .get("/coupons")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          expirationDate: FIND_MANY_RESULT[0].expirationDate.toISOString(),
        },
      ]);
  });

  test("GET /coupons/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/coupons"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /coupons/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/coupons"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        expirationDate: FIND_ONE_RESULT.expirationDate.toISOString(),
      });
  });

  test("POST /coupons existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/coupons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/coupons")
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
