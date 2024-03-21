import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantDetailServiceBase } from "./base/restaurantDetail.service.base";

@Injectable()
export class RestaurantDetailService extends RestaurantDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
