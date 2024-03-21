import { HashtagWhereInput } from "./HashtagWhereInput";
import { HashtagOrderByInput } from "./HashtagOrderByInput";

export type HashtagFindManyArgs = {
  where?: HashtagWhereInput;
  orderBy?: Array<HashtagOrderByInput>;
  skip?: number;
  take?: number;
};
