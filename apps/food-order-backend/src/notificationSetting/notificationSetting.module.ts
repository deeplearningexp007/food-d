import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotificationSettingModuleBase } from "./base/notificationSetting.module.base";
import { NotificationSettingService } from "./notificationSetting.service";
import { NotificationSettingController } from "./notificationSetting.controller";
import { NotificationSettingResolver } from "./notificationSetting.resolver";

@Module({
  imports: [NotificationSettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotificationSettingController],
  providers: [NotificationSettingService, NotificationSettingResolver],
  exports: [NotificationSettingService],
})
export class NotificationSettingModule {}
