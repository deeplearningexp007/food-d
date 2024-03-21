import { CouponRedemption } from "../couponRedemption/CouponRedemption";
import { Decimal } from "decimal.js";
import { Order } from "../order/Order";

export type Coupon = {
  code: string;
  couponRedemptions?: Array<CouponRedemption>;
  discountPercentage: Decimal;
  expirationDate: Date;
  id: number;
  isActive: boolean | null;
  orders?: Array<Order>;
};
