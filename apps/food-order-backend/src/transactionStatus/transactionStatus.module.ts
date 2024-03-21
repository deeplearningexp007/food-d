import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionStatusModuleBase } from "./base/transactionStatus.module.base";
import { TransactionStatusService } from "./transactionStatus.service";
import { TransactionStatusController } from "./transactionStatus.controller";
import { TransactionStatusResolver } from "./transactionStatus.resolver";

@Module({
  imports: [TransactionStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionStatusController],
  providers: [TransactionStatusService, TransactionStatusResolver],
  exports: [TransactionStatusService],
})
export class TransactionStatusModule {}
