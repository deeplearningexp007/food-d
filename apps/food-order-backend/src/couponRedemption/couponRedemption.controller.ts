import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CouponRedemptionService } from "./couponRedemption.service";
import { CouponRedemptionControllerBase } from "./base/couponRedemption.controller.base";

@swagger.ApiTags("couponRedemptions")
@common.Controller("couponRedemptions")
export class CouponRedemptionController extends CouponRedemptionControllerBase {
  constructor(
    protected readonly service: CouponRedemptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
