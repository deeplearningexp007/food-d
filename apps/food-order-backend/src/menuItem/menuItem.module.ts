import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuItemModuleBase } from "./base/menuItem.module.base";
import { MenuItemService } from "./menuItem.service";
import { MenuItemController } from "./menuItem.controller";
import { MenuItemResolver } from "./menuItem.resolver";

@Module({
  imports: [MenuItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuItemController],
  providers: [MenuItemService, MenuItemResolver],
  exports: [MenuItemService],
})
export class MenuItemModule {}
