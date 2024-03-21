import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentMethodResolverBase } from "./base/paymentMethod.resolver.base";
import { PaymentMethod } from "./base/PaymentMethod";
import { PaymentMethodService } from "./paymentMethod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentMethod)
export class PaymentMethodResolver extends PaymentMethodResolverBase {
  constructor(
    protected readonly service: PaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
