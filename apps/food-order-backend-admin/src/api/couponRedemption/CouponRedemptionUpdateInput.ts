import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CouponRedemptionUpdateInput = {
  coupons?: CouponWhereUniqueInput;
  isRedeemed?: boolean | null;
  redemptionDate?: Date;
  userModels?: UserModelWhereUniqueInput;
};
