import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerSubscriptionListRelationFilter } from "../customerSubscription/CustomerSubscriptionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type SubscriptionWhereInput = {
  autoRenew?: BooleanFilter;
  createdAt?: DateTimeFilter;
  customerSubscriptions?: CustomerSubscriptionListRelationFilter;
  endDate?: DateTimeNullableFilter;
  id?: IntFilter;
  paymentStatus?: StringFilter;
  startDate?: DateTimeFilter;
  status?: StringFilter;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
