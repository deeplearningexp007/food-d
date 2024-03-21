import { GeoLocation as TGeoLocation } from "../api/geoLocation/GeoLocation";

export const GEOLOCATION_TITLE_FIELD = "address";

export const GeoLocationTitle = (record: TGeoLocation): string => {
  return record.address?.toString() || String(record.id);
};
