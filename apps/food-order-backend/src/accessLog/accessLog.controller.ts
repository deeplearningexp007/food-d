import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccessLogService } from "./accessLog.service";
import { AccessLogControllerBase } from "./base/accessLog.controller.base";

@swagger.ApiTags("accessLogs")
@common.Controller("accessLogs")
export class AccessLogController extends AccessLogControllerBase {
  constructor(
    protected readonly service: AccessLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
