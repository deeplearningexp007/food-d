import { CustomerSubscriptionWhereInput } from "./CustomerSubscriptionWhereInput";
import { CustomerSubscriptionOrderByInput } from "./CustomerSubscriptionOrderByInput";

export type CustomerSubscriptionFindManyArgs = {
  where?: CustomerSubscriptionWhereInput;
  orderBy?: Array<CustomerSubscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
