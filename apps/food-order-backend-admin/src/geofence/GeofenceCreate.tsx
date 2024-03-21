import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { GeoLocationTitle } from "../geoLocation/GeoLocationTitle";

export const GeofenceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="geoLocations.id"
          reference="GeoLocation"
          label="Geo Locations"
        >
          <SelectInput optionText={GeoLocationTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Radius" source="radius" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
