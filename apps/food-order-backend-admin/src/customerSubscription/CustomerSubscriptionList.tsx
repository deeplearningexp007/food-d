import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "../subscriptionPlan/SubscriptionPlanTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const CustomerSubscriptionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerSubscriptions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
