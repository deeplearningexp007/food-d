import { GeofenceCreateNestedManyWithoutGeoLocationsInput } from "./GeofenceCreateNestedManyWithoutGeoLocationsInput";
import { Decimal } from "decimal.js";

export type GeoLocationCreateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  geofences?: GeofenceCreateNestedManyWithoutGeoLocationsInput;
  initialSignon?: boolean | null;
  latitude?: Decimal | null;
  longitude?: Decimal | null;
  postalCode?: string | null;
  state?: string | null;
};
