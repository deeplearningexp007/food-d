import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteMenuItemServiceBase } from "./base/favoriteMenuItem.service.base";

@Injectable()
export class FavoriteMenuItemService extends FavoriteMenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
