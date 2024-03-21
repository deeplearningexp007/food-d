import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const RestaurantDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RestaurantDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Delivery Charge" source="deliveryCharge" />
        <TextField label="Delivery Time" source="deliveryTime" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image Url" source="imageUrl" />
        <TextField label="Min Order Value" source="minOrderValue" />
        <TextField label="Rating" source="rating" />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Review Count" source="reviewCount" />
      </Datagrid>
    </List>
  );
};
