import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerPreferenceResolverBase } from "./base/customerPreference.resolver.base";
import { CustomerPreference } from "./base/CustomerPreference";
import { CustomerPreferenceService } from "./customerPreference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerPreference)
export class CustomerPreferenceResolver extends CustomerPreferenceResolverBase {
  constructor(
    protected readonly service: CustomerPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
