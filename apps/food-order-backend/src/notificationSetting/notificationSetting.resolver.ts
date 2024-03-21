import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NotificationSettingResolverBase } from "./base/notificationSetting.resolver.base";
import { NotificationSetting } from "./base/NotificationSetting";
import { NotificationSettingService } from "./notificationSetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NotificationSetting)
export class NotificationSettingResolver extends NotificationSettingResolverBase {
  constructor(
    protected readonly service: NotificationSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
