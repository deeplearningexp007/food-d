import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GEOLOCATION_TITLE_FIELD } from "../geoLocation/GeoLocationTitle";

export const GeofenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Geofences"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
