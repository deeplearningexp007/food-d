import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccessLogTitle } from "../accessLog/AccessLogTitle";
import { CouponRedemptionTitle } from "../couponRedemption/CouponRedemptionTitle";
import { CustomerPreferenceTitle } from "../customerPreference/CustomerPreferenceTitle";
import { CustomerSubscriptionTitle } from "../customerSubscription/CustomerSubscriptionTitle";
import { ErrorLogTitle } from "../errorLog/ErrorLogTitle";
import { FavoriteTitle } from "../favorite/FavoriteTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { NotificationSettingTitle } from "../notificationSetting/NotificationSettingTitle";
import { OrderTitle } from "../order/OrderTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { RewardTitle } from "../reward/RewardTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserAddressTitle } from "../userAddress/UserAddressTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const UserModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessLogs"
          reference="AccessLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessLogTitle} />
        </ReferenceArrayInput>
        <TextInput label="Apple Sso Token" source="appleSsoToken" />
        <ReferenceArrayInput
          source="couponRedemptions"
          reference="CouponRedemption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponRedemptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customerPreferences"
          reference="CustomerPreference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerPreferenceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customerSubscriptions"
          reference="CustomerSubscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerSubscriptionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Email Password" source="emailPassword" />
        <ReferenceArrayInput
          source="errorLogs"
          reference="ErrorLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ErrorLogTitle} />
        </ReferenceArrayInput>
        <TextInput label="Facebook Sso Token" source="facebookSsoToken" />
        <ReferenceArrayInput
          source="favorites"
          reference="Favorite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteTitle} />
        </ReferenceArrayInput>
        <TextInput label="Google Sso Token" source="googleSsoToken" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="notificationSettings"
          reference="NotificationSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationSettingTitle} />
        </ReferenceArrayInput>
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
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rewards"
          reference="Reward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RewardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Twitter Sso Token" source="twitterSsoToken" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput
          source="userAddresses"
          reference="UserAddress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAddressTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wishlist"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
