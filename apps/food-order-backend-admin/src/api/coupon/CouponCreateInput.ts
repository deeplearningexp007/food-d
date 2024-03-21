import { CouponRedemptionCreateNestedManyWithoutCouponsInput } from "./CouponRedemptionCreateNestedManyWithoutCouponsInput";
import { Decimal } from "decimal.js";
import { OrderCreateNestedManyWithoutCouponsInput } from "./OrderCreateNestedManyWithoutCouponsInput";

export type CouponCreateInput = {
  code: string;
  couponRedemptions?: CouponRedemptionCreateNestedManyWithoutCouponsInput;
  discountPercentage: Decimal;
  expirationDate: Date;
  isActive?: boolean | null;
  orders?: OrderCreateNestedManyWithoutCouponsInput;
};
