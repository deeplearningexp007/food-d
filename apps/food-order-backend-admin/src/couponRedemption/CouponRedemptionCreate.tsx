import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { CouponTitle } from "../coupon/CouponTitle";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const CouponRedemptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="coupons.id" reference="Coupon" label="Coupons">
          <SelectInput optionText={CouponTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Redeemed" source="isRedeemed" />
        <DateTimeInput label="Redemption Date" source="redemptionDate" />
        <ReferenceInput
          source="userModels.id"
          reference="UserModel"
          label="User Models"
        >
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
