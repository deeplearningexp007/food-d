import { Geofence as TGeofence } from "../api/geofence/Geofence";

export const GEOFENCE_TITLE_FIELD = "name";

export const GeofenceTitle = (record: TGeofence): string => {
  return record.name?.toString() || String(record.id);
};
