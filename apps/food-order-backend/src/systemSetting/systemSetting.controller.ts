import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SystemSettingService } from "./systemSetting.service";
import { SystemSettingControllerBase } from "./base/systemSetting.controller.base";

@swagger.ApiTags("systemSettings")
@common.Controller("systemSettings")
export class SystemSettingController extends SystemSettingControllerBase {
  constructor(
    protected readonly service: SystemSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
