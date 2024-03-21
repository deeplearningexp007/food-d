import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Apple Sso Token" source="appleSsoToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Email Password" source="emailPassword" />
        <TextField label="Facebook Sso Token" source="facebookSsoToken" />
        <TextField label="Google Sso Token" source="googleSsoToken" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Twitter Sso Token" source="twitterSsoToken" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
