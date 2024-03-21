import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerSubscriptionListRelationFilter } from "../customerSubscription/CustomerSubscriptionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SubscriptionPlanWhereInput = {
  createdAt?: DateTimeFilter;
  customerSubscriptions?: CustomerSubscriptionListRelationFilter;
  description?: StringNullableFilter;
  duration?: IntFilter;
  durationUnit?: StringFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  price?: DecimalFilter;
  subscriptions?: SubscriptionListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
