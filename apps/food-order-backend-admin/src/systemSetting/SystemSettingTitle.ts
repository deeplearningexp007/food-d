import { SystemSetting as TSystemSetting } from "../api/systemSetting/SystemSetting";

export const SYSTEMSETTING_TITLE_FIELD = "description";

export const SystemSettingTitle = (record: TSystemSetting): string => {
  return record.description?.toString() || String(record.id);
};
