import { Coupon as TCoupon } from "../api/coupon/Coupon";

export const COUPON_TITLE_FIELD = "code";

export const CouponTitle = (record: TCoupon): string => {
  return record.code?.toString() || String(record.id);
};
