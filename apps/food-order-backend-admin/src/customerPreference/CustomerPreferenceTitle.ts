import { CustomerPreference as TCustomerPreference } from "../api/customerPreference/CustomerPreference";

export const CUSTOMERPREFERENCE_TITLE_FIELD = "preferenceType";

export const CustomerPreferenceTitle = (
  record: TCustomerPreference
): string => {
  return record.preferenceType?.toString() || String(record.id);
};
