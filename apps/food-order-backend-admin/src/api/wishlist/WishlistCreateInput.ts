import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type WishlistCreateInput = {
  itemId?: number | null;
  itemType?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
