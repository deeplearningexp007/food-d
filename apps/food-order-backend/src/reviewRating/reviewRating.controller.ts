import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewRatingService } from "./reviewRating.service";
import { ReviewRatingControllerBase } from "./base/reviewRating.controller.base";

@swagger.ApiTags("reviewRatings")
@common.Controller("reviewRatings")
export class ReviewRatingController extends ReviewRatingControllerBase {
  constructor(
    protected readonly service: ReviewRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
