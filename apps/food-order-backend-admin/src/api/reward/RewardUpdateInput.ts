import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type RewardUpdateInput = {
  expirationDate?: Date | null;
  points?: number | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
