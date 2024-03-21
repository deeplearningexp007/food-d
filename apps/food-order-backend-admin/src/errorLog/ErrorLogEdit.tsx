import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserModelTitle } from "../userModel/UserModelTitle";

export const ErrorLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
