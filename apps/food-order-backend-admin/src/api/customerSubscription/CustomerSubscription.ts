import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { Subscription } from "../subscription/Subscription";
import { UserModel } from "../userModel/UserModel";

export type CustomerSubscription = {
  activationDate: Date;
  createdAt: Date;
  expirationDate: Date | null;
  id: number;
  renewalCount: number;
  subscriptionPlans?: SubscriptionPlan;
  subscriptions?: Subscription;
  updatedAt: Date | null;
  userModels?: UserModel;
};
