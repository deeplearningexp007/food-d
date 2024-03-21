import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HashtagService } from "./hashtag.service";
import { HashtagControllerBase } from "./base/hashtag.controller.base";

@swagger.ApiTags("hashtags")
@common.Controller("hashtags")
export class HashtagController extends HashtagControllerBase {
  constructor(
    protected readonly service: HashtagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
