import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "reportType";

export const ReportTitle = (record: TReport): string => {
  return record.reportType?.toString() || String(record.id);
};
