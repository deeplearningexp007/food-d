import { Restaurant } from "../restaurant/Restaurant";
import { UserModel } from "../userModel/UserModel";

export type Reservation = {
  createdAt: Date | null;
  id: number;
  partySize: number | null;
  reservationDate: Date | null;
  reservationTime: Date | null;
  restaurants?: Restaurant | null;
  status: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
