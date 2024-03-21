import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CouponTitle } from "../coupon/CouponTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserAddressTitle } from "../userAddress/UserAddressTitle";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="coupons.id" reference="Coupon" label="Coupons">
          <SelectInput optionText={CouponTitle} />
        </ReferenceInput>
        <DateTimeInput label="Delivery Time" source="deliveryTime" />
        <NumberInput label="Discount Amount" source="discountAmount" />
        <NumberInput label="Final Amount" source="finalAmount" />
        <BooleanInput label="Is Delivered" source="isDelivered" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Order Type" source="orderType" />
        <ReferenceInput
          source="paymentMethods.id"
          reference="PaymentMethod"
          label="Payment Methods"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="restaurants.id"
          reference="Restaurant"
          label="Restaurants"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <DateTimeInput
          label="Scheduled Delivery Time"
          source="scheduledDeliveryTime"
        />
        <TextInput label="Special Instructions" source="specialInstructions" />
        <TextInput label="Status" source="status" />
        <NumberInput label="Total Amount" source="totalAmount" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="userAddresses.id"
          reference="UserAddress"
          label="User Addresses"
        >
          <SelectInput optionText={UserAddressTitle} />
        </ReferenceInput>
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
