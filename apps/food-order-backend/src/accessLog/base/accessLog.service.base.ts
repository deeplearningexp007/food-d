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
  AccessLog, // @ts-ignore
  UserModel,
} from "@prisma/client";

export class AccessLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccessLogCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessLogCountArgs>
  ): Promise<number> {
    return this.prisma.accessLog.count(args);
  }

  async accessLogs<T extends Prisma.AccessLogFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessLogFindManyArgs>
  ): Promise<AccessLog[]> {
    return this.prisma.accessLog.findMany(args);
  }
  async accessLog<T extends Prisma.AccessLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessLogFindUniqueArgs>
  ): Promise<AccessLog | null> {
    return this.prisma.accessLog.findUnique(args);
  }
  async createAccessLog<T extends Prisma.AccessLogCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessLogCreateArgs>
  ): Promise<AccessLog> {
    return this.prisma.accessLog.create<T>(args);
  }
  async updateAccessLog<T extends Prisma.AccessLogUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessLogUpdateArgs>
  ): Promise<AccessLog> {
    return this.prisma.accessLog.update<T>(args);
  }
  async deleteAccessLog<T extends Prisma.AccessLogDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccessLogDeleteArgs>
  ): Promise<AccessLog> {
    return this.prisma.accessLog.delete(args);
  }

  async getUserModels(parentId: number): Promise<UserModel | null> {
    return this.prisma.accessLog
      .findUnique({
        where: { id: parentId },
      })
      .userModels();
  }
}