import { GeoLocation } from "../geoLocation/GeoLocation";

export type Geofence = {
  createdAt: Date | null;
  description: string | null;
  geoLocations?: GeoLocation | null;
  id: number;
  name: string | null;
  radius: number | null;
  updatedAt: Date | null;
};
