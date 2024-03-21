import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GEOLOCATION_TITLE_FIELD } from "./GeoLocationTitle";

export const GeoLocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="ID" source="id" />
        <BooleanField label="Initial Signon" source="initialSignon" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Postal Code" source="postalCode" />
        <TextField label="State" source="state" />
        <ReferenceManyField
          reference="Geofence"
          target="location_id"
          label="Geofences"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
