import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerPreferenceModuleBase } from "./base/customerPreference.module.base";
import { CustomerPreferenceService } from "./customerPreference.service";
import { CustomerPreferenceController } from "./customerPreference.controller";
import { CustomerPreferenceResolver } from "./customerPreference.resolver";

@Module({
  imports: [CustomerPreferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerPreferenceController],
  providers: [CustomerPreferenceService, CustomerPreferenceResolver],
  exports: [CustomerPreferenceService],
})
export class CustomerPreferenceModule {}
