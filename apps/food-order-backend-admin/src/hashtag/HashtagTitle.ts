import { Hashtag as THashtag } from "../api/hashtag/Hashtag";

export const HASHTAG_TITLE_FIELD = "hashText";

export const HashtagTitle = (record: THashtag): string => {
  return record.hashText?.toString() || String(record.id);
};
