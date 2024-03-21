import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantDetailService } from "./restaurantDetail.service";
import { RestaurantDetailControllerBase } from "./base/restaurantDetail.controller.base";

@swagger.ApiTags("restaurantDetails")
@common.Controller("restaurantDetails")
export class RestaurantDetailController extends RestaurantDetailControllerBase {
  constructor(
    protected readonly service: RestaurantDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
