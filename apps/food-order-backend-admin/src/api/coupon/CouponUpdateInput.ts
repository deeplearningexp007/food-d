import { CouponRedemptionUpdateManyWithoutCouponsInput } from "./CouponRedemptionUpdateManyWithoutCouponsInput";
import { Decimal } from "decimal.js";
import { OrderUpdateManyWithoutCouponsInput } from "./OrderUpdateManyWithoutCouponsInput";

export type CouponUpdateInput = {
  code?: string;
  couponRedemptions?: CouponRedemptionUpdateManyWithoutCouponsInput;
  discountPercentage?: Decimal;
  expirationDate?: Date;
  isActive?: boolean | null;
  orders?: OrderUpdateManyWithoutCouponsInput;
};
