/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  NotificationSetting, // @ts-ignore
  UserModel,
} from "@prisma/client";

export class NotificationSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NotificationSettingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationSettingCountArgs>
  ): Promise<number> {
    return this.prisma.notificationSetting.count(args);
  }

  async notificationSettings<T extends Prisma.NotificationSettingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationSettingFindManyArgs>
  ): Promise<NotificationSetting[]> {
    return this.prisma.notificationSetting.findMany(args);
  }
  async notificationSetting<T extends Prisma.NotificationSettingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationSettingFindUniqueArgs>
  ): Promise<NotificationSetting | null> {
    return this.prisma.notificationSetting.findUnique(args);
  }
  async createNotificationSetting<
    T extends Prisma.NotificationSettingCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationSettingCreateArgs>
  ): Promise<NotificationSetting> {
    return this.prisma.notificationSetting.create<T>(args);
  }
  async updateNotificationSetting<
    T extends Prisma.NotificationSettingUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationSettingUpdateArgs>
  ): Promise<NotificationSetting> {
    return this.prisma.notificationSetting.update<T>(args);
  }
  async deleteNotificationSetting<
    T extends Prisma.NotificationSettingDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationSettingDeleteArgs>
  ): Promise<NotificationSetting> {
    return this.prisma.notificationSetting.delete(args);
  }

  async getUserModels(parentId: number): Promise<UserModel | null> {
    return this.prisma.notificationSetting
      .findUnique({
        where: { id: parentId },
      })
      .userModels();
  }
}
