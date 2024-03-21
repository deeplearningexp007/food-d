import { OrderUpdateManyWithoutUserAddressesInput } from "./OrderUpdateManyWithoutUserAddressesInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserAddressUpdateInput = {
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  country?: string | null;
  isPrimary?: boolean | null;
  orders?: OrderUpdateManyWithoutUserAddressesInput;
  pincode?: string | null;
  state?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
