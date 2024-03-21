import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CustomerSubscriptionUpdateInput = {
  activationDate?: Date;
  expirationDate?: Date | null;
  renewalCount?: number;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  subscriptions?: SubscriptionWhereUniqueInput;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput;
};
