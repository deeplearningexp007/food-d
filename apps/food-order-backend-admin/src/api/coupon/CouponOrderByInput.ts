import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  discountPercentage?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
};
