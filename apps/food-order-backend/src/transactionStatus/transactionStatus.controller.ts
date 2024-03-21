import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionStatusService } from "./transactionStatus.service";
import { TransactionStatusControllerBase } from "./base/transactionStatus.controller.base";

@swagger.ApiTags("transactionStatuses")
@common.Controller("transactionStatuses")
export class TransactionStatusController extends TransactionStatusControllerBase {
  constructor(
    protected readonly service: TransactionStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
