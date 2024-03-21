import { SortOrder } from "../../util/SortOrder";

export type PaymentMethodOrderByInput = {
  id?: SortOrder;
  methodDetails?: SortOrder;
  methodName?: SortOrder;
};
