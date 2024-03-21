import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavoriteRestaurantService } from "./favoriteRestaurant.service";
import { FavoriteRestaurantControllerBase } from "./base/favoriteRestaurant.controller.base";

@swagger.ApiTags("favoriteRestaurants")
@common.Controller("favoriteRestaurants")
export class FavoriteRestaurantController extends FavoriteRestaurantControllerBase {
  constructor(
    protected readonly service: FavoriteRestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
