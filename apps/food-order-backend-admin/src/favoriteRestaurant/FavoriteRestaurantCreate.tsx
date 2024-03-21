import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavoriteTitle } from "../favorite/FavoriteTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const FavoriteRestaurantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="favorites.id"
          reference="Favorite"
          label="Favorites"
        >
          <SelectInput optionText={FavoriteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
