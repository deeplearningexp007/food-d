import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorLogServiceBase } from "./base/errorLog.service.base";

@Injectable()
export class ErrorLogService extends ErrorLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
