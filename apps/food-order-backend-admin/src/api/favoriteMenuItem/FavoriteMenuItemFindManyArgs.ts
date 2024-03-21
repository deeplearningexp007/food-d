import { FavoriteMenuItemWhereInput } from "./FavoriteMenuItemWhereInput";
import { FavoriteMenuItemOrderByInput } from "./FavoriteMenuItemOrderByInput";

export type FavoriteMenuItemFindManyArgs = {
  where?: FavoriteMenuItemWhereInput;
  orderBy?: Array<FavoriteMenuItemOrderByInput>;
  skip?: number;
  take?: number;
};
