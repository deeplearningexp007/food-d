import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerSubscriptionModuleBase } from "./base/customerSubscription.module.base";
import { CustomerSubscriptionService } from "./customerSubscription.service";
import { CustomerSubscriptionController } from "./customerSubscription.controller";
import { CustomerSubscriptionResolver } from "./customerSubscription.resolver";

@Module({
  imports: [CustomerSubscriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerSubscriptionController],
  providers: [CustomerSubscriptionService, CustomerSubscriptionResolver],
  exports: [CustomerSubscriptionService],
})
export class CustomerSubscriptionModule {}
