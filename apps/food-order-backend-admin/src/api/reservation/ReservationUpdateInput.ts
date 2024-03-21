import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReservationUpdateInput = {
  createdAt?: Date | null;
  partySize?: number | null;
  reservationDate?: Date | null;
  reservationTime?: Date | null;
  restaurants?: RestaurantWhereUniqueInput | null;
  status?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
