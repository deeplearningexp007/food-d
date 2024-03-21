import { CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput } from "./CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type SubscriptionCreateInput = {
  autoRenew: boolean;
  customerSubscriptions?: CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput;
  endDate?: Date | null;
  paymentStatus: string;
  startDate: Date;
  status: string;
  subscriptionPlans: SubscriptionPlanWhereUniqueInput;
  updatedAt?: Date | null;
  userModels: UserModelWhereUniqueInput;
};
