import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const TransactionStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Status" source="status" />
        <ReferenceInput
          source="transactions.id"
          reference="Transaction"
          label="Transactions"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
