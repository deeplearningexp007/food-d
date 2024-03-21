import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { CustomerSubscriptionTitle } from "../customerSubscription/CustomerSubscriptionTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const SubscriptionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="customerSubscriptions"
          reference="CustomerSubscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerSubscriptionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Duration Unit" source="durationUnit" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
