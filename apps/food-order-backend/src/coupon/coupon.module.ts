import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CouponModuleBase } from "./base/coupon.module.base";
import { CouponService } from "./coupon.service";
import { CouponController } from "./coupon.controller";
import { CouponResolver } from "./coupon.resolver";

@Module({
  imports: [CouponModuleBase, forwardRef(() => AuthModule)],
  controllers: [CouponController],
  providers: [CouponService, CouponResolver],
  exports: [CouponService],
})
export class CouponModule {}
