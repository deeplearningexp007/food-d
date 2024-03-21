import { GeoLocationWhereInput } from "./GeoLocationWhereInput";
import { GeoLocationOrderByInput } from "./GeoLocationOrderByInput";

export type GeoLocationFindManyArgs = {
  where?: GeoLocationWhereInput;
  orderBy?: Array<GeoLocationOrderByInput>;
  skip?: number;
  take?: number;
};
