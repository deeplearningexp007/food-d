import { GeofenceWhereInput } from "./GeofenceWhereInput";
import { GeofenceOrderByInput } from "./GeofenceOrderByInput";

export type GeofenceFindManyArgs = {
  where?: GeofenceWhereInput;
  orderBy?: Array<GeofenceOrderByInput>;
  skip?: number;
  take?: number;
};
