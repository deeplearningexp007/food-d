import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  address?: SortOrder;
  averageCost?: SortOrder;
  closingHours?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  filterTag?: SortOrder;
  hashtags?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  openingHours?: SortOrder;
  phoneNumber?: SortOrder;
  shareSlug?: SortOrder;
  updatedAt?: SortOrder;
};
