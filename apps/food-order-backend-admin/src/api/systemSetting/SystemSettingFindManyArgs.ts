import { SystemSettingWhereInput } from "./SystemSettingWhereInput";
import { SystemSettingOrderByInput } from "./SystemSettingOrderByInput";

export type SystemSettingFindManyArgs = {
  where?: SystemSettingWhereInput;
  orderBy?: Array<SystemSettingOrderByInput>;
  skip?: number;
  take?: number;
};
