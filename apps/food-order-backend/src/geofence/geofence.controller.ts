import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeofenceService } from "./geofence.service";
import { GeofenceControllerBase } from "./base/geofence.controller.base";

@swagger.ApiTags("geofences")
@common.Controller("geofences")
export class GeofenceController extends GeofenceControllerBase {
  constructor(
    protected readonly service: GeofenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
