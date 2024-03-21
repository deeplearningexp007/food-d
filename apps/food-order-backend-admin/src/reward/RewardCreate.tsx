import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserModelTitle } from "../userModel/UserModelTitle";

export const RewardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <NumberInput step={1} label="Points" source="points" />
        <DateTimeInput label="Updated At" source="updatedAt" />
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
