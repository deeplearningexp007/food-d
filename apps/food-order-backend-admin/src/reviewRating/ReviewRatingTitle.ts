import { ReviewRating as TReviewRating } from "../api/reviewRating/ReviewRating";

export const REVIEWRATING_TITLE_FIELD = "id";

export const ReviewRatingTitle = (record: TReviewRating): string => {
  return record.id?.toString() || String(record.id);
};
