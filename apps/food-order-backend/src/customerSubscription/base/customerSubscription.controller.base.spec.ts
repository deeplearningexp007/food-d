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
import { CustomerSubscriptionController } from "../customerSubscription.controller";
import { CustomerSubscriptionService } from "../customerSubscription.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activationDate: new Date(),
  createdAt: new Date(),
  expirationDate: new Date(),
  id: 42,
  renewalCount: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  activationDate: new Date(),
  createdAt: new Date(),
  expirationDate: new Date(),
  id: 42,
  renewalCount: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    activationDate: new Date(),
    createdAt: new Date(),
    expirationDate: new Date(),
    id: 42,
    renewalCount: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  activationDate: new Date(),
  createdAt: new Date(),
  expirationDate: new Date(),
  id: 42,
  renewalCount: 42,
  updatedAt: new Date(),
};

const service = {
  createCustomerSubscription() {
    return CREATE_RESULT;
  },
  customerSubscriptions: () => FIND_MANY_RESULT,
  customerSubscription: ({ where }: { where: { id: string } }) => {
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

describe("CustomerSubscription", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomerSubscriptionService,
          useValue: service,
        },
      ],
      controllers: [CustomerSubscriptionController],
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

  test("POST /customerSubscriptions", async () => {
    await request(app.getHttpServer())
      .post("/customerSubscriptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activationDate: CREATE_RESULT.activationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /customerSubscriptions", async () => {
    await request(app.getHttpServer())
      .get("/customerSubscriptions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          activationDate: FIND_MANY_RESULT[0].activationDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expirationDate: FIND_MANY_RESULT[0].expirationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /customerSubscriptions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerSubscriptions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customerSubscriptions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerSubscriptions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        activationDate: FIND_ONE_RESULT.activationDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expirationDate: FIND_ONE_RESULT.expirationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customerSubscriptions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customerSubscriptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activationDate: CREATE_RESULT.activationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/customerSubscriptions")
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
