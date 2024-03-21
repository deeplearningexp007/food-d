import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CouponRedemptionWhereInput = {
  coupons?: CouponWhereUniqueInput;
  id?: IntFilter;
  isRedeemed?: BooleanNullableFilter;
  redemptionDate?: DateTimeFilter;
  userModels?: UserModelWhereUniqueInput;
};
