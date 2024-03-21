import { SortOrder } from "../../util/SortOrder";

export type GeoLocationOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  id?: SortOrder;
  initialSignon?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
};
