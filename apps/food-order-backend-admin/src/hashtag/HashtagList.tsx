import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HashtagList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Hashtags"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created At" source="createdAt" />
        <TextField label="Hash Text" source="hashText" />
        <TextField label="ID" source="id" />
        <TextField label="Tag" source="tag" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
