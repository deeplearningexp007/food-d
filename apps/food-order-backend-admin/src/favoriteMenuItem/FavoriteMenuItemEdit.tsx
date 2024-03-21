import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FavoriteTitle } from "../favorite/FavoriteTitle";
import { MenuItemTitle } from "../menuItem/MenuItemTitle";

export const FavoriteMenuItemEdit = (props: EditProps): React.ReactElement => {
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
          source="menuItems.id"
          reference="MenuItem"
          label="Menu Items"
        >
          <SelectInput optionText={MenuItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
