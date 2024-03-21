import { InputJsonValue } from "../../types";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ErrorLogCreateInput = {
  errorCode?: number | null;
  errorMessage?: string | null;
  requestInfo?: InputJsonValue;
  stackTrace?: string | null;
  timestamp?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
