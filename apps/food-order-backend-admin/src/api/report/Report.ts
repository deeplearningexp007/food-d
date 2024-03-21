import { JsonValue } from "type-fest";
import { UserModel } from "../userModel/UserModel";

export type Report = {
  createdAt: Date | null;
  id: number;
  reportData: JsonValue;
  reportType: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
