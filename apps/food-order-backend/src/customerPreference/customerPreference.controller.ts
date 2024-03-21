import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerPreferenceService } from "./customerPreference.service";
import { CustomerPreferenceControllerBase } from "./base/customerPreference.controller.base";

@swagger.ApiTags("customerPreferences")
@common.Controller("customerPreferences")
export class CustomerPreferenceController extends CustomerPreferenceControllerBase {
  constructor(
    protected readonly service: CustomerPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
