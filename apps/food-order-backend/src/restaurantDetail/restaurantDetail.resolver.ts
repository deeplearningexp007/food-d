import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantDetailResolverBase } from "./base/restaurantDetail.resolver.base";
import { RestaurantDetail } from "./base/RestaurantDetail";
import { RestaurantDetailService } from "./restaurantDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantDetail)
export class RestaurantDetailResolver extends RestaurantDetailResolverBase {
  constructor(
    protected readonly service: RestaurantDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
