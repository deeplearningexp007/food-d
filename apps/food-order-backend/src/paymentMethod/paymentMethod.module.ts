import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentMethodModuleBase } from "./base/paymentMethod.module.base";
import { PaymentMethodService } from "./paymentMethod.service";
import { PaymentMethodController } from "./paymentMethod.controller";
import { PaymentMethodResolver } from "./paymentMethod.resolver";

@Module({
  imports: [PaymentMethodModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService, PaymentMethodResolver],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
