import { CouponRedemptionWhereInput } from "./CouponRedemptionWhereInput";
import { CouponRedemptionOrderByInput } from "./CouponRedemptionOrderByInput";

export type CouponRedemptionFindManyArgs = {
  where?: CouponRedemptionWhereInput;
  orderBy?: Array<CouponRedemptionOrderByInput>;
  skip?: number;
  take?: number;
};
