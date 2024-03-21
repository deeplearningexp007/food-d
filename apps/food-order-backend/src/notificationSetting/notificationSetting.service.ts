import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationSettingServiceBase } from "./base/notificationSetting.service.base";

@Injectable()
export class NotificationSettingService extends NotificationSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
