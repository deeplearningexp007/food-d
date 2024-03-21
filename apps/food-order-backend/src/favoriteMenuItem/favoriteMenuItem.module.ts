import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavoriteMenuItemModuleBase } from "./base/favoriteMenuItem.module.base";
import { FavoriteMenuItemService } from "./favoriteMenuItem.service";
import { FavoriteMenuItemController } from "./favoriteMenuItem.controller";
import { FavoriteMenuItemResolver } from "./favoriteMenuItem.resolver";

@Module({
  imports: [FavoriteMenuItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavoriteMenuItemController],
  providers: [FavoriteMenuItemService, FavoriteMenuItemResolver],
  exports: [FavoriteMenuItemService],
})
export class FavoriteMenuItemModule {}
