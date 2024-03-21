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
import { CouponRedemptionController } from "../couponRedemption.controller";
import { CouponRedemptionService } from "../couponRedemption.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  isRedeemed: "true",
  redemptionDate: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  isRedeemed: "true",
  redemptionDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    isRedeemed: "true",
    redemptionDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  isRedeemed: "true",
  redemptionDate: new Date(),
};

const service = {
  createCouponRedemption() {
    return CREATE_RESULT;
  },
  couponRedemptions: () => FIND_MANY_RESULT,
  couponRedemption: ({ where }: { where: { id: string } }) => {
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

describe("CouponRedemption", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CouponRedemptionService,
          useValue: service,
        },
      ],
      controllers: [CouponRedemptionController],
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

  test("POST /couponRedemptions", async () => {
    await request(app.getHttpServer())
      .post("/couponRedemptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        redemptionDate: CREATE_RESULT.redemptionDate.toISOString(),
      });
  });

  test("GET /couponRedemptions", async () => {
    await request(app.getHttpServer())
      .get("/couponRedemptions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          redemptionDate: FIND_MANY_RESULT[0].redemptionDate.toISOString(),
        },
      ]);
  });

  test("GET /couponRedemptions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/couponRedemptions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /couponRedemptions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/couponRedemptions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        redemptionDate: FIND_ONE_RESULT.redemptionDate.toISOString(),
      });
  });

  test("POST /couponRedemptions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/couponRedemptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        redemptionDate: CREATE_RESULT.redemptionDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/couponRedemptions")
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
