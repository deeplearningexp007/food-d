import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USERADDRESS_TITLE_FIELD } from "../userAddress/UserAddressTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Coupons" source="coupon.id" reference="Coupon">
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
        <TextField label="Special Instructions" source="specialInstructions" />
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
        <ReferenceManyField
          reference="OrderItem"
          target="order_id"
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
        <ReferenceManyField
          reference="Payment"
          target="order_id"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Date" source="paymentDate" />
            <ReferenceField
              label="Payment Methods"
              source="paymentmethod.id"
              reference="PaymentMethod"
            >
              <TextField source={PAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Status" source="paymentStatus" />
            <TextField label="Transaction Id" source="transactionId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="order_id"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Transaction Type" source="transactionType" />
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
