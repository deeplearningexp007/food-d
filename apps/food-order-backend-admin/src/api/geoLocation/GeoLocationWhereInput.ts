import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GeofenceListRelationFilter } from "../geofence/GeofenceListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type GeoLocationWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  geofences?: GeofenceListRelationFilter;
  id?: IntFilter;
  initialSignon?: BooleanNullableFilter;
  latitude?: DecimalNullableFilter;
  longitude?: DecimalNullableFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
};
