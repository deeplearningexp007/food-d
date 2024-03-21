import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TransactionStatusResolverBase } from "./base/transactionStatus.resolver.base";
import { TransactionStatus } from "./base/TransactionStatus";
import { TransactionStatusService } from "./transactionStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionStatus)
export class TransactionStatusResolver extends TransactionStatusResolverBase {
  constructor(
    protected readonly service: TransactionStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
