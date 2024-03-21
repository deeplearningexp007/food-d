import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const ErrorLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ErrorLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
