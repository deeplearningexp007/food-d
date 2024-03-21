import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { FavoriteRestaurantTitle } from "../favoriteRestaurant/FavoriteRestaurantTitle";
import { MenuTitle } from "../menu/MenuTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";
import { RestaurantDetailTitle } from "../restaurantDetail/RestaurantDetailTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput label="Average Cost" source="averageCost" />
        <TextInput label="Closing Hours" source="closingHours" />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Email" source="email" />
        <ReferenceArrayInput
          source="favoriteRestaurants"
          reference="FavoriteRestaurant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteRestaurantTitle} />
        </ReferenceArrayInput>
        <TextInput label="Filter Tag" source="filterTag" />
        <TextInput label="Hashtags" source="hashtags" />
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceArrayInput
          source="menus"
          reference="Menu"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Opening Hours" source="openingHours" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantDetails"
          reference="RestaurantDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <TextInput label="Share Slug" source="shareSlug" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
