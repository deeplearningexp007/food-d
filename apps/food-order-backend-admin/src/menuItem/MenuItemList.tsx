import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENUITEMCATEGORY_TITLE_FIELD } from "../menuItemCategory/MenuItemCategoryTitle";
import { MENU_TITLE_FIELD } from "../menu/MenuTitle";

export const MenuItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MenuItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
