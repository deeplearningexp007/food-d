import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { GeofenceTitle } from "../geofence/GeofenceTitle";

export const GeoLocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <ReferenceArrayInput
          source="geofences"
          reference="Geofence"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GeofenceTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Initial Signon" source="initialSignon" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <TextInput label="Postal Code" source="postalCode" />
        <TextInput label="State" source="state" />
      </SimpleForm>
    </Create>
  );
};
