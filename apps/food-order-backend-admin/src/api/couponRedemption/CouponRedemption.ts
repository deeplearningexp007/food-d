import { Coupon } from "../coupon/Coupon";
import { UserModel } from "../userModel/UserModel";

export type CouponRedemption = {
  coupons?: Coupon;
  id: number;
  isRedeemed: boolean | null;
  redemptionDate: Date;
  userModels?: UserModel;
};
