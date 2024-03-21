import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Restaurants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <TextField label="Average Cost" source="averageCost" />
        <TextField label="Closing Hours" source="closingHours" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="Filter Tag" source="filterTag" />
        <TextField label="Hashtags" source="hashtags" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Opening Hours" source="openingHours" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Share Slug" source="shareSlug" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
