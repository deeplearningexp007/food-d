import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { CouponRedemptionTitle } from "../couponRedemption/CouponRedemptionTitle";
import { OrderTitle } from "../order/OrderTitle";

export const CouponCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceArrayInput
          source="couponRedemptions"
          reference="CouponRedemption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponRedemptionTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Discount Percentage" source="discountPercentage" />
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
