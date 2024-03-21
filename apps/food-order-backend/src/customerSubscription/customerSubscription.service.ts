import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerSubscriptionServiceBase } from "./base/customerSubscription.service.base";

@Injectable()
export class CustomerSubscriptionService extends CustomerSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
