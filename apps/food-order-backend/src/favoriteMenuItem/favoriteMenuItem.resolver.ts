import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FavoriteMenuItemResolverBase } from "./base/favoriteMenuItem.resolver.base";
import { FavoriteMenuItem } from "./base/FavoriteMenuItem";
import { FavoriteMenuItemService } from "./favoriteMenuItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavoriteMenuItem)
export class FavoriteMenuItemResolver extends FavoriteMenuItemResolverBase {
  constructor(
    protected readonly service: FavoriteMenuItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
