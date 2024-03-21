import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerSubscriptionResolverBase } from "./base/customerSubscription.resolver.base";
import { CustomerSubscription } from "./base/CustomerSubscription";
import { CustomerSubscriptionService } from "./customerSubscription.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerSubscription)
export class CustomerSubscriptionResolver extends CustomerSubscriptionResolverBase {
  constructor(
    protected readonly service: CustomerSubscriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
