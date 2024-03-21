import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ErrorLogService } from "./errorLog.service";
import { ErrorLogControllerBase } from "./base/errorLog.controller.base";

@swagger.ApiTags("errorLogs")
@common.Controller("errorLogs")
export class ErrorLogController extends ErrorLogControllerBase {
  constructor(
    protected readonly service: ErrorLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
