import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserModelTitle } from "../userModel/UserModelTitle";

export const ErrorLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Error Code" source="errorCode" />
        <TextInput label="Error Message" source="errorMessage" />
        <div />
        <TextInput label="Stack Trace" source="stackTrace" />
        <DateTimeInput label="Timestamp" source="timestamp" />
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
