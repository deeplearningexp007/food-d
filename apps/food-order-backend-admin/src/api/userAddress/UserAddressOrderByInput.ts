import { SortOrder } from "../../util/SortOrder";

export type UserAddressOrderByInput = {
  addressLine1?: SortOrder;
  addressLine2?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimary?: SortOrder;
  pincode?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
