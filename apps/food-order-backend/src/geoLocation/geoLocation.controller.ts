import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeoLocationService } from "./geoLocation.service";
import { GeoLocationControllerBase } from "./base/geoLocation.controller.base";

@swagger.ApiTags("geoLocations")
@common.Controller("geoLocations")
export class GeoLocationController extends GeoLocationControllerBase {
  constructor(
    protected readonly service: GeoLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
