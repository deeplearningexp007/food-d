import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { GEOLOCATION_TITLE_FIELD } from "../geoLocation/GeoLocationTitle";

export const GeofenceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Geo Locations"
          source="geolocation.id"
          reference="GeoLocation"
        >
          <TextField source={GEOLOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Radius" source="radius" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
