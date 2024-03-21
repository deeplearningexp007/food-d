import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
} from "react-admin";

import { FAVORITE_TITLE_FIELD } from "../favorite/FavoriteTitle";
import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { USERADDRESS_TITLE_FIELD } from "../userAddress/UserAddressTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Average Cost" source="averageCost" />
        <TextField label="Closing Hours" source="closingHours" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Email" source="email" />
        <TextField label="Filter Tag" source="filterTag" />
        <TextField label="Hashtags" source="hashtags" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Opening Hours" source="openingHours" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Share Slug" source="shareSlug" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="FavoriteRestaurant"
          target="restaurant_id"
          label="FavoriteRestaurants"
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
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Menu"
          target="restaurant_id"
          label="Menus"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="restaurant_id"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Coupons"
              source="coupon.id"
              reference="Coupon"
            >
              <TextField source={COUPON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Delivery Time" source="deliveryTime" />
            <TextField label="Discount Amount" source="discountAmount" />
            <TextField label="Final Amount" source="finalAmount" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Delivered" source="isDelivered" />
            <BooleanField label="Is Paid" source="isPaid" />
            <DateField source="orderDate" label="Order Date" />
            <TextField label="Order Type" source="orderType" />
            <ReferenceField
              label="Payment Methods"
              source="paymentmethod.id"
              reference="PaymentMethod"
            >
              <TextField source={PAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Scheduled Delivery Time"
              source="scheduledDeliveryTime"
            />
            <TextField
              label="Special Instructions"
              source="specialInstructions"
            />
            <TextField label="Status" source="status" />
            <TextField label="Total Amount" source="totalAmount" />
            <ReferenceField
              label="User Addresses"
              source="useraddress.id"
              reference="UserAddress"
            >
              <TextField source={USERADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Models"
              source="usermodel.id"
              reference="UserModel"
            >
              <TextField source={USERMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reservation"
          target="restaurant_id"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <TextField label="Created At" source="createdAt" />
            <TextField label="ID" source="id" />
            <TextField label="Party Size" source="partySize" />
            <TextField label="Reservation Date" source="reservationDate" />
            <TextField label="Reservation Time" source="reservationTime" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Models"
              source="usermodel.id"
              reference="UserModel"
            >
              <TextField source={USERMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RestaurantDetail"
          target="restaurant_id"
          label="RestaurantDetails"
        >
          <Datagrid rowClick="show">
            <TextField label="Delivery Charge" source="deliveryCharge" />
            <TextField label="Delivery Time" source="deliveryTime" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Image Url" source="imageUrl" />
            <TextField label="Min Order Value" source="minOrderValue" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Review Count" source="reviewCount" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="restaurant_id"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Body" source="body" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Restaurants"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="User Models"
              source="usermodel.id"
              reference="UserModel"
            >
              <TextField source={USERMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
