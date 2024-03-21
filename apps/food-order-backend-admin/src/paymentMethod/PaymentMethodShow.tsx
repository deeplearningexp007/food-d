import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
  DateField,
} from "react-admin";

import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "./PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USERADDRESS_TITLE_FIELD } from "../userAddress/UserAddressTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const PaymentMethodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Method Details" source="methodDetails" />
        <TextField label="Method Name" source="methodName" />
        <ReferenceManyField
          reference="Order"
          target="payment_method_id"
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
          reference="Payment"
          target="payment_method_id"
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
      </SimpleShowLayout>
    </Show>
  );
};
