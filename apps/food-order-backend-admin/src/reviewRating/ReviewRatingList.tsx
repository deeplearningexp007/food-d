import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const ReviewRatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReviewRatings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cleanliness" source="cleanliness" />
        <TextField label="Food Quality" source="foodQuality" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Service" source="service" />
        <TextField label="Value For Money" source="valueForMoney" />
      </Datagrid>
    </List>
  );
};
