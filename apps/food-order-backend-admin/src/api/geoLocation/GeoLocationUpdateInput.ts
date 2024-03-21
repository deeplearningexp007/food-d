import { GeofenceUpdateManyWithoutGeoLocationsInput } from "./GeofenceUpdateManyWithoutGeoLocationsInput";
import { Decimal } from "decimal.js";

export type GeoLocationUpdateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  geofences?: GeofenceUpdateManyWithoutGeoLocationsInput;
  initialSignon?: boolean | null;
  latitude?: Decimal | null;
  longitude?: Decimal | null;
  postalCode?: string | null;
  state?: string | null;
};
