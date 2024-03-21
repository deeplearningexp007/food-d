import { JsonValue } from "type-fest";
import { UserModel } from "../userModel/UserModel";

export type AccessLog = {
  action: string | null;
  deviceInfo: JsonValue;
  errorMessage: string | null;
  id: number;
  ipAddress: string | null;
  responseStatus: number | null;
  timestamp: Date | null;
  userModels?: UserModel | null;
};
