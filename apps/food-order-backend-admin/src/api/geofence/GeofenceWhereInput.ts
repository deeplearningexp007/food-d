import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GeoLocationWhereUniqueInput } from "../geoLocation/GeoLocationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GeofenceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  geoLocations?: GeoLocationWhereUniqueInput;
  id?: IntFilter;
  name?: StringNullableFilter;
  radius?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
