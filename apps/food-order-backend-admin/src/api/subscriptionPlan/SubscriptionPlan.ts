import { CustomerSubscription } from "../customerSubscription/CustomerSubscription";
import { Decimal } from "decimal.js";
import { Subscription } from "../subscription/Subscription";

export type SubscriptionPlan = {
  createdAt: Date;
  customerSubscriptions?: Array<CustomerSubscription>;
  description: string | null;
  duration: number;
  durationUnit: string;
  id: number;
  isActive: boolean;
  name: string;
  price: Decimal;
  subscriptions?: Array<Subscription>;
  updatedAt: Date | null;
};
