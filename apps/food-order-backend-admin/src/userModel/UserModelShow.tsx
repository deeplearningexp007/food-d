import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USERMODEL_TITLE_FIELD } from "./UserModelTitle";
import { COUPON_TITLE_FIELD } from "../coupon/CouponTitle";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "../subscriptionPlan/SubscriptionPlanTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";
import { PAYMENTMETHOD_TITLE_FIELD } from "../paymentMethod/PaymentMethodTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USERADDRESS_TITLE_FIELD } from "../userAddress/UserAddressTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const UserModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Apple Sso Token" source="appleSsoToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Email Password" source="emailPassword" />
        <TextField label="Facebook Sso Token" source="facebookSsoToken" />
        <TextField label="Google Sso Token" source="googleSsoToken" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Twitter Sso Token" source="twitterSsoToken" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="AccessLog"
          target="user_id"
          label="AccessLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Action" source="action" />
            <TextField label="Device Info" source="deviceInfo" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="ID" source="id" />
            <TextField label="Ip Address" source="ipAddress" />
            <TextField label="Response Status" source="responseStatus" />
            <TextField label="Timestamp" source="timestamp" />
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
          reference="CouponRedemption"
          target="user_id"
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
        <ReferenceManyField
          reference="CustomerPreference"
          target="user_id"
          label="CustomerPreferences"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Preference Type" source="preferenceType" />
            <TextField label="Preference Value" source="preferenceValue" />
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
          reference="CustomerSubscription"
          target="user_id"
          label="CustomerSubscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="Activation Date" source="activationDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Renewal Count" source="renewalCount" />
            <ReferenceField
              label="Subscription Plans"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Subscriptions"
              source="subscription.id"
              reference="Subscription"
            >
              <TextField source={SUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
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
          reference="ErrorLog"
          target="user_id"
          label="ErrorLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Error Code" source="errorCode" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="ID" source="id" />
            <TextField label="Request Info" source="requestInfo" />
            <TextField label="Stack Trace" source="stackTrace" />
            <TextField label="Timestamp" source="timestamp" />
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
          reference="Favorite"
          target="user_id"
          label="Favorites"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
          reference="Notification"
          target="user_id"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Message" source="message" />
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
          reference="NotificationSetting"
          target="user_id"
          label="NotificationSettings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Setting Name" source="settingName" />
            <BooleanField label="Setting Value" source="settingValue" />
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
        <ReferenceManyField reference="Order" target="user_id" label="Orders">
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
        <ReferenceManyField reference="Report" target="user_id" label="Reports">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Report Data" source="reportData" />
            <TextField label="Report Type" source="reportType" />
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
          reference="Reservation"
          target="user_id"
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
        <ReferenceManyField reference="Review" target="user_id" label="Reviews">
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
        <ReferenceManyField reference="Reward" target="user_id" label="Rewards">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Points" source="points" />
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
          reference="Subscription"
          target="user_id"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Auto Renew" source="autoRenew" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Payment Status" source="paymentStatus" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Subscription Plans"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
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
          reference="Transaction"
          target="user_id"
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
        <ReferenceManyField
          reference="UserAddress"
          target="user_id"
          label="UserAddresses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Wishlist"
          target="user_id"
          label="Wishlists"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Item Id" source="itemId" />
            <TextField label="Item Type" source="itemType" />
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
