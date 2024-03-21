import { ErrorLogWhereInput } from "./ErrorLogWhereInput";
import { ErrorLogOrderByInput } from "./ErrorLogOrderByInput";

export type ErrorLogFindManyArgs = {
  where?: ErrorLogWhereInput;
  orderBy?: Array<ErrorLogOrderByInput>;
  skip?: number;
  take?: number;
};
