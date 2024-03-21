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
  DateField,
} from "react-admin";

import { FAVORITE_TITLE_FIELD } from "../favorite/FavoriteTitle";
import { MENUITEM_TITLE_FIELD } from "./MenuItemTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { MENUITEMCATEGORY_TITLE_FIELD } from "../menuItemCategory/MenuItemCategoryTitle";
import { MENU_TITLE_FIELD } from "../menu/MenuTitle";

export const MenuItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FavoriteMenuItem"
          target="menu_item_id"
          label="FavoriteMenuItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Favorites"
              source="favorite.id"
              reference="Favorite"
            >
              <TextField source={FAVORITE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MenuItemCategory"
          target="menu_item_id"
          label="MenuItemCategories"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Menu Items Menu Item Categories Menu Item Id To Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="name" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItem"
          target="menu_item_id"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Customization Options"
              source="customizationOptions"
            />
            <TextField label="ID" source="id" />
            <TextField label="Item Description" source="itemDescription" />
            <TextField label="Item Image" source="itemImage" />
            <TextField label="Item Name" source="itemName" />
            <ReferenceField
              label="Menu Items"
              source="menuitem.id"
              reference="MenuItem"
            >
              <TextField source={MENUITEM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <TextField label="Quantity" source="quantity" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
