import { CustomerSubscriptionUpdateManyWithoutSubscriptionPlansInput } from "./CustomerSubscriptionUpdateManyWithoutSubscriptionPlansInput";
import { Decimal } from "decimal.js";
import { SubscriptionUpdateManyWithoutSubscriptionPlansInput } from "./SubscriptionUpdateManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanUpdateInput = {
  customerSubscriptions?: CustomerSubscriptionUpdateManyWithoutSubscriptionPlansInput;
  description?: string | null;
  duration?: number;
  durationUnit?: string;
  isActive?: boolean;
  name?: string;
  price?: Decimal;
  subscriptions?: SubscriptionUpdateManyWithoutSubscriptionPlansInput;
  updatedAt?: Date | null;
};
