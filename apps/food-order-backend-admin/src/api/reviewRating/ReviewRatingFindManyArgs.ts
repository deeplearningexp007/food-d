import { ReviewRatingWhereInput } from "./ReviewRatingWhereInput";
import { ReviewRatingOrderByInput } from "./ReviewRatingOrderByInput";

export type ReviewRatingFindManyArgs = {
  where?: ReviewRatingWhereInput;
  orderBy?: Array<ReviewRatingOrderByInput>;
  skip?: number;
  take?: number;
};
