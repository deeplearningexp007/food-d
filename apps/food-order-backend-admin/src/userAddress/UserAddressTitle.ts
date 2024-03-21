import { UserAddress as TUserAddress } from "../api/userAddress/UserAddress";

export const USERADDRESS_TITLE_FIELD = "addressLine1";

export const UserAddressTitle = (record: TUserAddress): string => {
  return record.addressLine1?.toString() || String(record.id);
};
