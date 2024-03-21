import { UserAddressWhereInput } from "./UserAddressWhereInput";
import { UserAddressOrderByInput } from "./UserAddressOrderByInput";

export type UserAddressFindManyArgs = {
  where?: UserAddressWhereInput;
  orderBy?: Array<UserAddressOrderByInput>;
  skip?: number;
  take?: number;
};
