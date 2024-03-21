import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerPreferenceServiceBase } from "./base/customerPreference.service.base";

@Injectable()
export class CustomerPreferenceService extends CustomerPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
