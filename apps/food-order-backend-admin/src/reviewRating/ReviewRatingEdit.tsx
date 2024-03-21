import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ReviewTitle } from "../review/ReviewTitle";

export const ReviewRatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cleanliness" source="cleanliness" />
        <NumberInput label="Food Quality" source="foodQuality" />
        <ReferenceInput source="reviews.id" reference="Review" label="Reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <NumberInput label="Service" source="service" />
        <NumberInput label="Value For Money" source="valueForMoney" />
      </SimpleForm>
    </Edit>
  );
};
