import { GeoLocationWhereUniqueInput } from "../geoLocation/GeoLocationWhereUniqueInput";

export type GeofenceCreateInput = {
  createdAt?: Date | null;
  description?: string | null;
  geoLocations?: GeoLocationWhereUniqueInput | null;
  name?: string | null;
  radius?: number | null;
  updatedAt?: Date | null;
};
