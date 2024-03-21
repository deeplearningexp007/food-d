import { UserModel } from "../userModel/UserModel";

export type Wishlist = {
  createdAt: Date | null;
  id: number;
  itemId: number | null;
  itemType: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
