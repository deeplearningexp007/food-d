import { InputJsonValue } from "../../types";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReportCreateInput = {
  reportData?: InputJsonValue;
  reportType?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
