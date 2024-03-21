import { SortOrder } from "../../util/SortOrder";

export type GeofenceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  location_id?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  radius?: SortOrder;
  updatedAt?: SortOrder;
};
