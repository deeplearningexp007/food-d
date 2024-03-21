import { CouponRedemption as TCouponRedemption } from "../api/couponRedemption/CouponRedemption";

export const COUPONREDEMPTION_TITLE_FIELD = "id";

export const CouponRedemptionTitle = (record: TCouponRedemption): string => {
  return record.id?.toString() || String(record.id);
};
