import { InputJsonValue } from "../../types";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type AccessLogUpdateInput = {
  action?: string | null;
  deviceInfo?: InputJsonValue;
  errorMessage?: string | null;
  ipAddress?: string | null;
  responseStatus?: number | null;
  timestamp?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
