import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CouponRedemptionModuleBase } from "./base/couponRedemption.module.base";
import { CouponRedemptionService } from "./couponRedemption.service";
import { CouponRedemptionController } from "./couponRedemption.controller";
import { CouponRedemptionResolver } from "./couponRedemption.resolver";

@Module({
  imports: [CouponRedemptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CouponRedemptionController],
  providers: [CouponRedemptionService, CouponRedemptionResolver],
  exports: [CouponRedemptionService],
})
export class CouponRedemptionModule {}
