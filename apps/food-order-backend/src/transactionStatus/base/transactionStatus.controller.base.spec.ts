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
import { TransactionStatusController } from "../transactionStatus.controller";
import { TransactionStatusService } from "../transactionStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  status: "exampleStatus",
  statusDate: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  status: "exampleStatus",
  statusDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    status: "exampleStatus",
    statusDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  status: "exampleStatus",
  statusDate: new Date(),
};

const service = {
  createTransactionStatus() {
    return CREATE_RESULT;
  },
  transactionStatuses: () => FIND_MANY_RESULT,
  transactionStatus: ({ where }: { where: { id: string } }) => {
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

describe("TransactionStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TransactionStatusService,
          useValue: service,
        },
      ],
      controllers: [TransactionStatusController],
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

  test("POST /transactionStatuses", async () => {
    await request(app.getHttpServer())
      .post("/transactionStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statusDate: CREATE_RESULT.statusDate.toISOString(),
      });
  });

  test("GET /transactionStatuses", async () => {
    await request(app.getHttpServer())
      .get("/transactionStatuses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          statusDate: FIND_MANY_RESULT[0].statusDate.toISOString(),
        },
      ]);
  });

  test("GET /transactionStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/transactionStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /transactionStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/transactionStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        statusDate: FIND_ONE_RESULT.statusDate.toISOString(),
      });
  });

  test("POST /transactionStatuses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/transactionStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statusDate: CREATE_RESULT.statusDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/transactionStatuses")
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
