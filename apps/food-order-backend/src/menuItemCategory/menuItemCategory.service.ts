import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuItemCategoryServiceBase } from "./base/menuItemCategory.service.base";

@Injectable()
export class MenuItemCategoryService extends MenuItemCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
