import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionStatusServiceBase } from "./base/transactionStatus.service.base";

@Injectable()
export class TransactionStatusService extends TransactionStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
