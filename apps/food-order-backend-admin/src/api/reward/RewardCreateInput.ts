import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type RewardCreateInput = {
  expirationDate?: Date | null;
  points?: number | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
