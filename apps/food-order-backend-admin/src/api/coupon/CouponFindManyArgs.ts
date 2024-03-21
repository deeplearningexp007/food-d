import { CouponWhereInput } from "./CouponWhereInput";
import { CouponOrderByInput } from "./CouponOrderByInput";

export type CouponFindManyArgs = {
  where?: CouponWhereInput;
  orderBy?: Array<CouponOrderByInput>;
  skip?: number;
  take?: number;
};
