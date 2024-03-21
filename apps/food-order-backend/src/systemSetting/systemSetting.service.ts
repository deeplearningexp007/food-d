import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemSettingServiceBase } from "./base/systemSetting.service.base";

@Injectable()
export class SystemSettingService extends SystemSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
