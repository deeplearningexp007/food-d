import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemCategoryModuleBase } from "./base/menuItemCategory.module.base";
import { MenuItemCategoryService } from "./menuItemCategory.service";
import { MenuItemCategoryController } from "./menuItemCategory.controller";
import { MenuItemCategoryResolver } from "./menuItemCategory.resolver";

@Module({
  imports: [MenuItemCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemCategoryController],
  providers: [MenuItemCategoryService, MenuItemCategoryResolver],
  exports: [MenuItemCategoryService],
})
export class MenuItemCategoryModule {}
