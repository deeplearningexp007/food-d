import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FavoriteMenuItemTitle } from "../favoriteMenuItem/FavoriteMenuItemTitle";
import { FavoriteRestaurantTitle } from "../favoriteRestaurant/FavoriteRestaurantTitle";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const FavoriteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="favoriteMenuItems"
          reference="FavoriteMenuItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteMenuItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="favoriteRestaurants"
          reference="FavoriteRestaurant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteRestaurantTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput
          source="userModels.id"
          reference="UserModel"
          label="User Models"
        >
          <SelectInput optionText={UserModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
