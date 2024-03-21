import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccessLogModuleBase } from "./base/accessLog.module.base";
import { AccessLogService } from "./accessLog.service";
import { AccessLogController } from "./accessLog.controller";
import { AccessLogResolver } from "./accessLog.resolver";

@Module({
  imports: [AccessLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccessLogController],
  providers: [AccessLogService, AccessLogResolver],
  exports: [AccessLogService],
})
export class AccessLogModule {}
