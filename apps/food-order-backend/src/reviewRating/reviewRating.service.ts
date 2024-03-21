import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewRatingServiceBase } from "./base/reviewRating.service.base";

@Injectable()
export class ReviewRatingService extends ReviewRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
