import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentMethodService } from "./paymentMethod.service";
import { PaymentMethodControllerBase } from "./base/paymentMethod.controller.base";

@swagger.ApiTags("paymentMethods")
@common.Controller("paymentMethods")
export class PaymentMethodController extends PaymentMethodControllerBase {
  constructor(
    protected readonly service: PaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
