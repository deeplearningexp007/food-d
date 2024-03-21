import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerSubscriptionService } from "./customerSubscription.service";
import { CustomerSubscriptionControllerBase } from "./base/customerSubscription.controller.base";

@swagger.ApiTags("customerSubscriptions")
@common.Controller("customerSubscriptions")
export class CustomerSubscriptionController extends CustomerSubscriptionControllerBase {
  constructor(
    protected readonly service: CustomerSubscriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
