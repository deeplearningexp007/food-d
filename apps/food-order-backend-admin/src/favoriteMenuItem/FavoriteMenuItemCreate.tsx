import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavoriteTitle } from "../favorite/FavoriteTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const FavoriteMenuItemCreate = (
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
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
