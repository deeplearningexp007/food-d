import { CustomerPreferenceWhereInput } from "./CustomerPreferenceWhereInput";
import { CustomerPreferenceOrderByInput } from "./CustomerPreferenceOrderByInput";

export type CustomerPreferenceFindManyArgs = {
  where?: CustomerPreferenceWhereInput;
  orderBy?: Array<CustomerPreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
