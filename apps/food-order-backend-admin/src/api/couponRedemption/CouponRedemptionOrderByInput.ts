import { SortOrder } from "../../util/SortOrder";

export type CouponRedemptionOrderByInput = {
  coupon_id?: SortOrder;
  id?: SortOrder;
  isRedeemed?: SortOrder;
  redemptionDate?: SortOrder;
  user_id?: SortOrder;
};
