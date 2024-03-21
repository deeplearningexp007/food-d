import { OrderCreateNestedManyWithoutUserAddressesInput } from "./OrderCreateNestedManyWithoutUserAddressesInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserAddressCreateInput = {
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  country?: string | null;
  isPrimary?: boolean | null;
  orders?: OrderCreateNestedManyWithoutUserAddressesInput;
  pincode?: string | null;
  state?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
