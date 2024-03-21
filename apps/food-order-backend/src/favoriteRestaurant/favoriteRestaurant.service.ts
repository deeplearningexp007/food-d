import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteRestaurantServiceBase } from "./base/favoriteRestaurant.service.base";

@Injectable()
export class FavoriteRestaurantService extends FavoriteRestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
