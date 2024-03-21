import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { MENUITEMCATEGORY_TITLE_FIELD } from "./MenuItemCategoryTitle";
import { MENU_TITLE_FIELD } from "../menu/MenuTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const MenuItemCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Menu Items Menu Item Categories Menu Item Id To Menu Items"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="MenuItem"
          target="category_id"
          label="MenuItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Available Quantity" source="availableQuantity" />
            <TextField label="Description" source="description" />
            <TextField label="Hashtags" source="hashtags" />
            <TextField label="ID" source="id" />
            <TextField label="Image Url" source="imageUrl" />
            <TextField label="Ingredients" source="ingredients" />
            <BooleanField label="Is Active" source="isActive" />
            <BooleanField label="Is Vegetarian" source="isVegetarian" />
            <ReferenceField
              label="Menu Item Categories Menu Items Category Id To Menu Item Categories"
              source="menuitemcategory.id"
              reference="MenuItemCategory"
            >
              <TextField source={MENUITEMCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Menus" source="menu.id" reference="Menu">
              <TextField source={MENU_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="name" />
            <TextField label="Preparation Time" source="preparationTime" />
            <TextField label="Price" source="price" />
            <TextField label="Share Slug" source="shareSlug" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
