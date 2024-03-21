import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const AccessLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Action" source="action" />
        <TextField label="Device Info" source="deviceInfo" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="ID" source="id" />
        <TextField label="Ip Address" source="ipAddress" />
        <TextField label="Response Status" source="responseStatus" />
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
