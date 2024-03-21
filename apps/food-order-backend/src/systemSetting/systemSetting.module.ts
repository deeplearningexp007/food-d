import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SystemSettingModuleBase } from "./base/systemSetting.module.base";
import { SystemSettingService } from "./systemSetting.service";
import { SystemSettingController } from "./systemSetting.controller";
import { SystemSettingResolver } from "./systemSetting.resolver";

@Module({
  imports: [SystemSettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [SystemSettingController],
  providers: [SystemSettingService, SystemSettingResolver],
  exports: [SystemSettingService],
})
export class SystemSettingModule {}
