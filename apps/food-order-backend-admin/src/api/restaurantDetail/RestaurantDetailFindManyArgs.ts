import { RestaurantDetailWhereInput } from "./RestaurantDetailWhereInput";
import { RestaurantDetailOrderByInput } from "./RestaurantDetailOrderByInput";

export type RestaurantDetailFindManyArgs = {
  where?: RestaurantDetailWhereInput;
  orderBy?: Array<RestaurantDetailOrderByInput>;
  skip?: number;
  take?: number;
};
