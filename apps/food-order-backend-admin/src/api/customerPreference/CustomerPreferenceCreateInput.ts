import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CustomerPreferenceCreateInput = {
  preferenceType?: string | null;
  preferenceValue?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
