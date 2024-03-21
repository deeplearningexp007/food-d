import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuItemCategoryService } from "./menuItemCategory.service";
import { MenuItemCategoryControllerBase } from "./base/menuItemCategory.controller.base";

@swagger.ApiTags("menuItemCategories")
@common.Controller("menuItemCategories")
export class MenuItemCategoryController extends MenuItemCategoryControllerBase {
  constructor(
    protected readonly service: MenuItemCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
