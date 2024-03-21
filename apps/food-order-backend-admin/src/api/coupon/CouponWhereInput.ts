import { StringFilter } from "../../util/StringFilter";
import { CouponRedemptionListRelationFilter } from "../couponRedemption/CouponRedemptionListRelationFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CouponWhereInput = {
  code?: StringFilter;
  couponRedemptions?: CouponRedemptionListRelationFilter;
  discountPercentage?: DecimalFilter;
  expirationDate?: DateTimeFilter;
  id?: IntFilter;
  isActive?: BooleanNullableFilter;
  orders?: OrderListRelationFilter;
};
