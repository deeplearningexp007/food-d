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
import { OrderController } from "../order.controller";
import { OrderService } from "../order.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  deliveryTime: new Date(),
  discountAmount: 42.424242424,
  finalAmount: 42.424242424,
  id: 42,
  isDelivered: "true",
  isPaid: "true",
  orderDate: new Date(),
  orderType: "exampleOrderType",
  scheduledDeliveryTime: new Date(),
  specialInstructions: "exampleSpecialInstructions",
  status: "exampleStatus",
  totalAmount: 42.424242424,
};
const CREATE_RESULT = {
  deliveryTime: new Date(),
  discountAmount: 42.424242424,
  finalAmount: 42.424242424,
  id: 42,
  isDelivered: "true",
  isPaid: "true",
  orderDate: new Date(),
  orderType: "exampleOrderType",
  scheduledDeliveryTime: new Date(),
  specialInstructions: "exampleSpecialInstructions",
  status: "exampleStatus",
  totalAmount: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    deliveryTime: new Date(),
    discountAmount: 42.424242424,
    finalAmount: 42.424242424,
    id: 42,
    isDelivered: "true",
    isPaid: "true",
    orderDate: new Date(),
    orderType: "exampleOrderType",
    scheduledDeliveryTime: new Date(),
    specialInstructions: "exampleSpecialInstructions",
    status: "exampleStatus",
    totalAmount: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  deliveryTime: new Date(),
  discountAmount: 42.424242424,
  finalAmount: 42.424242424,
  id: 42,
  isDelivered: "true",
  isPaid: "true",
  orderDate: new Date(),
  orderType: "exampleOrderType",
  scheduledDeliveryTime: new Date(),
  specialInstructions: "exampleSpecialInstructions",
  status: "exampleStatus",
  totalAmount: 42.424242424,
};

const service = {
  createOrder() {
    return CREATE_RESULT;
  },
  orders: () => FIND_MANY_RESULT,
  order: ({ where }: { where: { id: string } }) => {
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

describe("Order", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderService,
          useValue: service,
        },
      ],
      controllers: [OrderController],
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

  test("POST /orders", async () => {
    await request(app.getHttpServer())
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        deliveryTime: CREATE_RESULT.deliveryTime.toISOString(),
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        scheduledDeliveryTime:
          CREATE_RESULT.scheduledDeliveryTime.toISOString(),
      });
  });

  test("GET /orders", async () => {
    await request(app.getHttpServer())
      .get("/orders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          deliveryTime: FIND_MANY_RESULT[0].deliveryTime.toISOString(),
          orderDate: FIND_MANY_RESULT[0].orderDate.toISOString(),
          scheduledDeliveryTime:
            FIND_MANY_RESULT[0].scheduledDeliveryTime.toISOString(),
        },
      ]);
  });

  test("GET /orders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        deliveryTime: FIND_ONE_RESULT.deliveryTime.toISOString(),
        orderDate: FIND_ONE_RESULT.orderDate.toISOString(),
        scheduledDeliveryTime:
          FIND_ONE_RESULT.scheduledDeliveryTime.toISOString(),
      });
  });

  test("POST /orders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        deliveryTime: CREATE_RESULT.deliveryTime.toISOString(),
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        scheduledDeliveryTime:
          CREATE_RESULT.scheduledDeliveryTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/orders")
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
