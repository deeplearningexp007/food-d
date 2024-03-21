import { ErrorLog as TErrorLog } from "../api/errorLog/ErrorLog";

export const ERRORLOG_TITLE_FIELD = "errorMessage";

export const ErrorLogTitle = (record: TErrorLog): string => {
  return record.errorMessage?.toString() || String(record.id);
};
