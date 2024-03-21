import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FavoriteRestaurantResolverBase } from "./base/favoriteRestaurant.resolver.base";
import { FavoriteRestaurant } from "./base/FavoriteRestaurant";
import { FavoriteRestaurantService } from "./favoriteRestaurant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavoriteRestaurant)
export class FavoriteRestaurantResolver extends FavoriteRestaurantResolverBase {
  constructor(
    protected readonly service: FavoriteRestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
