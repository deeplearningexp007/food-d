import { Geofence } from "../geofence/Geofence";
import { Decimal } from "decimal.js";

export type GeoLocation = {
  address: string | null;
  city: string | null;
  country: string | null;
  geofences?: Array<Geofence>;
  id: number;
  initialSignon: boolean | null;
  latitude: Decimal | null;
  longitude: Decimal | null;
  postalCode: string | null;
  state: string | null;
};
