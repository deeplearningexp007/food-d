import { GeoLocationWhereUniqueInput } from "./GeoLocationWhereUniqueInput";
import { GeoLocationUpdateInput } from "./GeoLocationUpdateInput";

export type UpdateGeoLocationArgs = {
  where: GeoLocationWhereUniqueInput;
  data: GeoLocationUpdateInput;
};
