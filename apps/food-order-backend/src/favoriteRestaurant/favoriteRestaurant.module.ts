import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavoriteRestaurantModuleBase } from "./base/favoriteRestaurant.module.base";
import { FavoriteRestaurantService } from "./favoriteRestaurant.service";
import { FavoriteRestaurantController } from "./favoriteRestaurant.controller";
import { FavoriteRestaurantResolver } from "./favoriteRestaurant.resolver";

@Module({
  imports: [FavoriteRestaurantModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavoriteRestaurantController],
  providers: [FavoriteRestaurantService, FavoriteRestaurantResolver],
  exports: [FavoriteRestaurantService],
})
export class FavoriteRestaurantModule {}
