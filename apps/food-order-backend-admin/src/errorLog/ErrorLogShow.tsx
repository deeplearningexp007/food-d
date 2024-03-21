import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const ErrorLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Error Code" source="errorCode" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="ID" source="id" />
        <TextField label="Request Info" source="requestInfo" />
        <TextField label="Stack Trace" source="stackTrace" />
        <TextField label="Timestamp" source="timestamp" />
        <ReferenceField
          label="User Models"
          source="usermodel.id"
          reference="UserModel"
        >
          <TextField source={USERMODEL_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
