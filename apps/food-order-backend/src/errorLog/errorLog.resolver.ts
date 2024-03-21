import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ErrorLogResolverBase } from "./base/errorLog.resolver.base";
import { ErrorLog } from "./base/ErrorLog";
import { ErrorLogService } from "./errorLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ErrorLog)
export class ErrorLogResolver extends ErrorLogResolverBase {
  constructor(
    protected readonly service: ErrorLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
