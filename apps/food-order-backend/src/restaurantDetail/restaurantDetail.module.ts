import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantDetailModuleBase } from "./base/restaurantDetail.module.base";
import { RestaurantDetailService } from "./restaurantDetail.service";
import { RestaurantDetailController } from "./restaurantDetail.controller";
import { RestaurantDetailResolver } from "./restaurantDetail.resolver";

@Module({
  imports: [RestaurantDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantDetailController],
  providers: [RestaurantDetailService, RestaurantDetailResolver],
  exports: [RestaurantDetailService],
})
export class RestaurantDetailModule {}
