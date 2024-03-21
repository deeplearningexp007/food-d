import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CustomerPreferenceUpdateInput = {
  preferenceType?: string | null;
  preferenceValue?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
