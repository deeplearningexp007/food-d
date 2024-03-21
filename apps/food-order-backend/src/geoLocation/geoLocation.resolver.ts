import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GeoLocationResolverBase } from "./base/geoLocation.resolver.base";
import { GeoLocation } from "./base/GeoLocation";
import { GeoLocationService } from "./geoLocation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GeoLocation)
export class GeoLocationResolver extends GeoLocationResolverBase {
  constructor(
    protected readonly service: GeoLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
