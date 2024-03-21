import { SortOrder } from "../../util/SortOrder";

export type CustomerPreferenceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  preferenceType?: SortOrder;
  preferenceValue?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
