import { SortOrder } from "../../util/SortOrder";

export type HashtagOrderByInput = {
  createdAt?: SortOrder;
  hashText?: SortOrder;
  id?: SortOrder;
  tag?: SortOrder;
  updatedAt?: SortOrder;
};
