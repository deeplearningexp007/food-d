import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavoriteMenuItemService } from "./favoriteMenuItem.service";
import { FavoriteMenuItemControllerBase } from "./base/favoriteMenuItem.controller.base";

@swagger.ApiTags("favoriteMenuItems")
@common.Controller("favoriteMenuItems")
export class FavoriteMenuItemController extends FavoriteMenuItemControllerBase {
  constructor(
    protected readonly service: FavoriteMenuItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
