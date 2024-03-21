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
import { ReviewRatingController } from "../reviewRating.controller";
import { ReviewRatingService } from "../reviewRating.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cleanliness: 42.424242424,
  foodQuality: 42.424242424,
  id: 42,
  service: 42.424242424,
  valueForMoney: 42.424242424,
};
const CREATE_RESULT = {
  cleanliness: 42.424242424,
  foodQuality: 42.424242424,
  id: 42,
  service: 42.424242424,
  valueForMoney: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    cleanliness: 42.424242424,
    foodQuality: 42.424242424,
    id: 42,
    service: 42.424242424,
    valueForMoney: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  cleanliness: 42.424242424,
  foodQuality: 42.424242424,
  id: 42,
  service: 42.424242424,
  valueForMoney: 42.424242424,
};

const service = {
  createReviewRating() {
    return CREATE_RESULT;
  },
  reviewRatings: () => FIND_MANY_RESULT,
  reviewRating: ({ where }: { where: { id: string } }) => {
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

describe("ReviewRating", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReviewRatingService,
          useValue: service,
        },
      ],
      controllers: [ReviewRatingController],
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

  test("POST /reviewRatings", async () => {
    await request(app.getHttpServer())
      .post("/reviewRatings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /reviewRatings", async () => {
    await request(app.getHttpServer())
      .get("/reviewRatings")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /reviewRatings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reviewRatings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reviewRatings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reviewRatings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /reviewRatings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/reviewRatings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/reviewRatings")
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
