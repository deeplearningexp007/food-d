import { CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput";
import { Decimal } from "decimal.js";
import { SubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./SubscriptionCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  customerSubscriptions?: CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput;
  description?: string | null;
  duration: number;
  durationUnit: string;
  isActive: boolean;
  name: string;
  price: Decimal;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPlansInput;
  updatedAt?: Date | null;
};
