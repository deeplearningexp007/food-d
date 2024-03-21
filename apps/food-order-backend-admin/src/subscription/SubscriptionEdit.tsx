import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CustomerSubscriptionTitle } from "../customerSubscription/CustomerSubscriptionTitle";
import { SubscriptionPlanTitle } from "../subscriptionPlan/SubscriptionPlanTitle";
import { UserModelTitle } from "../userModel/UserModelTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Auto Renew" source="autoRenew" />
        <ReferenceArrayInput
          source="customerSubscriptions"
          reference="CustomerSubscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerSubscriptionTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Payment Status" source="paymentStatus" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="Status" source="status" />
        <ReferenceInput
          source="subscriptionPlans.id"
          reference="SubscriptionPlan"
          label="Subscription Plans"
        >
          <SelectInput optionText={SubscriptionPlanTitle} />
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
    </Edit>
  );
};
