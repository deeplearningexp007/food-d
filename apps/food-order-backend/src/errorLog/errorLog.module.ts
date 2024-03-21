import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ErrorLogModuleBase } from "./base/errorLog.module.base";
import { ErrorLogService } from "./errorLog.service";
import { ErrorLogController } from "./errorLog.controller";
import { ErrorLogResolver } from "./errorLog.resolver";

@Module({
  imports: [ErrorLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [ErrorLogController],
  providers: [ErrorLogService, ErrorLogResolver],
  exports: [ErrorLogService],
})
export class ErrorLogModule {}
