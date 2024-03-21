import { AccessLog as TAccessLog } from "../api/accessLog/AccessLog";

export const ACCESSLOG_TITLE_FIELD = "action";

export const AccessLogTitle = (record: TAccessLog): string => {
  return record.action?.toString() || String(record.id);
};
