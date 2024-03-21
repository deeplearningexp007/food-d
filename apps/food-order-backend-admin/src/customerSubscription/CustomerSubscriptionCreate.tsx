import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubscriptionPlanTitle } from "../subscriptionPlan/SubscriptionPlanTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const CustomerSubscriptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Activation Date" source="activationDate" />
        <DateTimeInput label="Expiration Date" source="expirationDate" />
        <NumberInput step={1} label="Renewal Count" source="renewalCount" />
        <ReferenceInput
          source="subscriptionPlans.id"
          reference="SubscriptionPlan"
          label="Subscription Plans"
        >
          <SelectInput optionText={SubscriptionPlanTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="subscriptions.id"
          reference="Subscription"
          label="Subscriptions"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
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
