import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavoriteTitle } from "../favorite/FavoriteTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const FavoriteRestaurantEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
