import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const RestaurantDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Delivery Charge" source="deliveryCharge" />
        <TextInput label="Delivery Time" source="deliveryTime" />
        <TextInput label="Description" source="description" />
        <TextInput label="Image Url" source="imageUrl" />
        <NumberInput label="Min Order Value" source="minOrderValue" />
        <NumberInput label="Rating" source="rating" />
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Review Count" source="reviewCount" />
      </SimpleForm>
    </Create>
  );
};
