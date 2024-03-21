import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Payment Amount" source="paymentAmount" />
        <DateTimeInput label="Payment Date" source="paymentDate" />
        <ReferenceInput
          source="paymentMethods.id"
          reference="PaymentMethod"
          label="Payment Methods"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
        <TextInput label="Payment Status" source="paymentStatus" />
        <TextInput label="Transaction Id" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
