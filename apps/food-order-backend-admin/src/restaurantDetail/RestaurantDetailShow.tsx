import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const RestaurantDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
