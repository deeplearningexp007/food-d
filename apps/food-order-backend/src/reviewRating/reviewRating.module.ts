import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewRatingModuleBase } from "./base/reviewRating.module.base";
import { ReviewRatingService } from "./reviewRating.service";
import { ReviewRatingController } from "./reviewRating.controller";
import { ReviewRatingResolver } from "./reviewRating.resolver";

@Module({
  imports: [ReviewRatingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewRatingController],
  providers: [ReviewRatingService, ReviewRatingResolver],
  exports: [ReviewRatingService],
})
export class ReviewRatingModule {}
