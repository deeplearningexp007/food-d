import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MenuModuleBase } from "./base/menu.module.base";
import { MenuService } from "./menu.service";
import { MenuController } from "./menu.controller";
import { MenuResolver } from "./menu.resolver";

@Module({
  imports: [MenuModuleBase, forwardRef(() => AuthModule)],
  controllers: [MenuController],
  providers: [MenuService, MenuResolver],
  exports: [MenuService],
})
export class MenuModule {}
