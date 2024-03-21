import { CustomerSubscriptionUpdateManyWithoutSubscriptionsInput } from "./CustomerSubscriptionUpdateManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type SubscriptionUpdateInput = {
  autoRenew?: boolean;
  customerSubscriptions?: CustomerSubscriptionUpdateManyWithoutSubscriptionsInput;
  endDate?: Date | null;
  paymentStatus?: string;
  startDate?: Date;
  status?: string;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput;
};
