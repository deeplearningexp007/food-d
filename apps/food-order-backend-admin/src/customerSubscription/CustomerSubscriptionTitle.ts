import { CustomerSubscription as TCustomerSubscription } from "../api/customerSubscription/CustomerSubscription";

export const CUSTOMERSUBSCRIPTION_TITLE_FIELD = "id";

export const CustomerSubscriptionTitle = (
  record: TCustomerSubscription
): string => {
  return record.id?.toString() || String(record.id);
};
