import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FavoriteMenuItemTitle } from "../favoriteMenuItem/FavoriteMenuItemTitle";
import { MenuItemCategoryTitle } from "../menuItemCategory/MenuItemCategoryTitle";
import { MenuTitle } from "../menu/MenuTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const MenuItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Available Quantity"
          source="availableQuantity"
        />
        <TextInput label="Description" source="description" />
        <ReferenceArrayInput
          source="favoriteMenuItems"
          reference="FavoriteMenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteMenuItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Hashtags" source="hashtags" />
        <TextInput label="Image Url" source="imageUrl" />
        <TextInput label="Ingredients" source="ingredients" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Vegetarian" source="isVegetarian" />
        <ReferenceArrayInput
          source="menuItemCategoriesMenuItemCategoriesMenuItemIdToMenuItems"
          reference="MenuItemCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuItemCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="menuItemCategoriesMenuItemsCategoryIdToMenuItemCategories.id"
          reference="MenuItemCategory"
          label="Menu Item Categories Menu Items Category Id To Menu Item Categories"
        >
          <SelectInput optionText={MenuItemCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="menus.id" reference="Menu" label="Menus">
          <SelectInput optionText={MenuTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Preparation Time"
          source="preparationTime"
        />
        <NumberInput label="Price" source="price" />
        <TextInput label="Share Slug" source="shareSlug" />
      </SimpleForm>
    </Edit>
  );
};
