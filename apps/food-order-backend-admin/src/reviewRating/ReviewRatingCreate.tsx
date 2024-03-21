import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ReviewTitle } from "../review/ReviewTitle";

export const ReviewRatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cleanliness" source="cleanliness" />
        <NumberInput label="Food Quality" source="foodQuality" />
        <ReferenceInput source="reviews.id" reference="Review" label="Reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <NumberInput label="Service" source="service" />
        <NumberInput label="Value For Money" source="valueForMoney" />
      </SimpleForm>
    </Create>
  );
};
