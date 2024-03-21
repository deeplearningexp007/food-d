import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewRatingResolverBase } from "./base/reviewRating.resolver.base";
import { ReviewRating } from "./base/ReviewRating";
import { ReviewRatingService } from "./reviewRating.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewRating)
export class ReviewRatingResolver extends ReviewRatingResolverBase {
  constructor(
    protected readonly service: ReviewRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
