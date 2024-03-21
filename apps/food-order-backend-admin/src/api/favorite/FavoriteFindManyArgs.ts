import { FavoriteWhereInput } from "./FavoriteWhereInput";
import { FavoriteOrderByInput } from "./FavoriteOrderByInput";

export type FavoriteFindManyArgs = {
  where?: FavoriteWhereInput;
  orderBy?: Array<FavoriteOrderByInput>;
  skip?: number;
  take?: number;
};
