import { SortOrder } from "../../util/SortOrder";

export type ReviewRatingOrderByInput = {
  cleanliness?: SortOrder;
  foodQuality?: SortOrder;
  id?: SortOrder;
  review_id?: SortOrder;
  service?: SortOrder;
  valueForMoney?: SortOrder;
};
