import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { REVIEW_TITLE_FIELD } from "./ReviewTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USERMODEL_TITLE_FIELD } from "../userModel/UserModelTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ReviewRating"
          target="review_id"
          label="ReviewRatings"
        >
          <Datagrid rowClick="show">
            <TextField label="Cleanliness" source="cleanliness" />
            <TextField label="Food Quality" source="foodQuality" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Reviews"
              source="review.id"
              reference="Review"
            >
              <TextField source={REVIEW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Service" source="service" />
            <TextField label="Value For Money" source="valueForMoney" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
