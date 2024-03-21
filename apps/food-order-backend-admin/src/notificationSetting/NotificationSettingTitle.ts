import { NotificationSetting as TNotificationSetting } from "../api/notificationSetting/NotificationSetting";

export const NOTIFICATIONSETTING_TITLE_FIELD = "settingName";

export const NotificationSettingTitle = (
  record: TNotificationSetting
): string => {
  return record.settingName?.toString() || String(record.id);
};
