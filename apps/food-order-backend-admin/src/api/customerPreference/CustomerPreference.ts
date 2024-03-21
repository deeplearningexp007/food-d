import { UserModel } from "../userModel/UserModel";

export type CustomerPreference = {
  createdAt: Date | null;
  id: number;
  preferenceType: string | null;
  preferenceValue: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
