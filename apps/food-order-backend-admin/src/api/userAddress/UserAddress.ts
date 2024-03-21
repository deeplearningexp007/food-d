import { Order } from "../order/Order";
import { UserModel } from "../userModel/UserModel";

export type UserAddress = {
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date | null;
  id: number;
  isPrimary: boolean | null;
  orders?: Array<Order>;
  pincode: string | null;
  state: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
