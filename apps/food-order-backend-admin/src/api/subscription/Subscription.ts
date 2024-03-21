import { CustomerSubscription } from "../customerSubscription/CustomerSubscription";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { UserModel } from "../userModel/UserModel";

export type Subscription = {
  autoRenew: boolean;
  createdAt: Date;
  customerSubscriptions?: Array<CustomerSubscription>;
  endDate: Date | null;
  id: number;
  paymentStatus: string;
  startDate: Date;
  status: string;
  subscriptionPlans?: SubscriptionPlan;
  updatedAt: Date | null;
  userModels?: UserModel;
};
