import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotificationSettingService } from "./notificationSetting.service";
import { NotificationSettingControllerBase } from "./base/notificationSetting.controller.base";

@swagger.ApiTags("notificationSettings")
@common.Controller("notificationSettings")
export class NotificationSettingController extends NotificationSettingControllerBase {
  constructor(
    protected readonly service: NotificationSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
