import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAddressServiceBase } from "./base/userAddress.service.base";

@Injectable()
export class UserAddressService extends UserAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
