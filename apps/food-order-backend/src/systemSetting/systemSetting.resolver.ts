import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SystemSettingResolverBase } from "./base/systemSetting.resolver.base";
import { SystemSetting } from "./base/SystemSetting";
import { SystemSettingService } from "./systemSetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SystemSetting)
export class SystemSettingResolver extends SystemSettingResolverBase {
  constructor(
    protected readonly service: SystemSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
