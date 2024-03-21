import { JsonValue } from "type-fest";
import { UserModel } from "../userModel/UserModel";

export type ErrorLog = {
  errorCode: number | null;
  errorMessage: string | null;
  id: number;
  requestInfo: JsonValue;
  stackTrace: string | null;
  timestamp: Date | null;
  userModels?: UserModel | null;
};
