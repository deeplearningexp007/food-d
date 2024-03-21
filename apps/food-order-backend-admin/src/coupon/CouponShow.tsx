import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
} from "react-admin";

import { COUPON_TITLE_FIELD } from "./CouponTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USERADDRESS_TITLE_FIELD } from "../userAddress/UserAddressTitle";

export const CouponShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <TextField label="Discount Percentage" source="discountPercentage" />
        <TextField label="Expiration Date" source="expirationDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <ReferenceManyField
          reference="CouponRedemption"
          target="coupon_id"
          label="CouponRedemptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Coupons"
              source="coupon.id"
              reference="Coupon"
            >
              <TextField source={COUPON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Redeemed" source="isRedeemed" />
            <TextField label="Redemption Date" source="redemptionDate" />
            <ReferenceField
              label="User Models"
              source="usermodel.id"
              reference="UserModel"
            >
              <TextField source={USERMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="coupon_id" label="Orders">
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
