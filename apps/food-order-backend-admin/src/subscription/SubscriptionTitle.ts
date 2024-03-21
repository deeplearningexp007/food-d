import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "paymentStatus";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.paymentStatus?.toString() || String(record.id);
};
