import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { CouponRedemptionTitle } from "../couponRedemption/CouponRedemptionTitle";
import { OrderTitle } from "../order/OrderTitle";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
