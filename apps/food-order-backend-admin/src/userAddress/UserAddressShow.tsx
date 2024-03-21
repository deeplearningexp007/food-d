import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USERADDRESS_TITLE_FIELD } from "./UserAddressTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const UserAddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address Line1" source="addressLine1" />
        <TextField label="Address Line2" source="addressLine2" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Primary" source="isPrimary" />
        <TextField label="Pincode" source="pincode" />
        <TextField label="State" source="state" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField
          label="User Models"
          source="usermodel.id"
          reference="UserModel"
        >
          <TextField source={USERMODEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Order"
          target="delivery_address_id"
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
      </SimpleShowLayout>
    </Show>
  );
};
