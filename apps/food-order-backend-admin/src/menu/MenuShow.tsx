import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MENUITEMCATEGORY_TITLE_FIELD } from "../menuItemCategory/MenuItemCategoryTitle";
import { MENU_TITLE_FIELD } from "./MenuTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const MenuShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Restaurants"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="MenuItem"
          target="menu_id"
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
