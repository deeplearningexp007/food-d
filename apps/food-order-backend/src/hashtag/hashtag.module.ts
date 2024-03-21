import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HashtagModuleBase } from "./base/hashtag.module.base";
import { HashtagService } from "./hashtag.service";
import { HashtagController } from "./hashtag.controller";
import { HashtagResolver } from "./hashtag.resolver";

@Module({
  imports: [HashtagModuleBase, forwardRef(() => AuthModule)],
  controllers: [HashtagController],
  providers: [HashtagService, HashtagResolver],
  exports: [HashtagService],
})
export class HashtagModule {}
