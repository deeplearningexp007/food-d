import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CustomerSubscriptionWhereInput = {
  activationDate?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: IntFilter;
  renewalCount?: IntFilter;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  subscriptions?: SubscriptionWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
