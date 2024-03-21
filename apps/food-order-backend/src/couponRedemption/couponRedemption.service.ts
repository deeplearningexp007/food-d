import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CouponRedemptionServiceBase } from "./base/couponRedemption.service.base";

@Injectable()
export class CouponRedemptionService extends CouponRedemptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
