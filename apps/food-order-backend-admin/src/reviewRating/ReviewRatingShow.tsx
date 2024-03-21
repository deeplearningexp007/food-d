import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const ReviewRatingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cleanliness" source="cleanliness" />
        <TextField label="Food Quality" source="foodQuality" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Service" source="service" />
        <TextField label="Value For Money" source="valueForMoney" />
      </SimpleShowLayout>
    </Show>
  );
};
