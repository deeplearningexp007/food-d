/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { NotificationSetting } from "./NotificationSetting";
import { NotificationSettingCountArgs } from "./NotificationSettingCountArgs";
import { NotificationSettingFindManyArgs } from "./NotificationSettingFindManyArgs";
import { NotificationSettingFindUniqueArgs } from "./NotificationSettingFindUniqueArgs";
import { CreateNotificationSettingArgs } from "./CreateNotificationSettingArgs";
import { UpdateNotificationSettingArgs } from "./UpdateNotificationSettingArgs";
import { DeleteNotificationSettingArgs } from "./DeleteNotificationSettingArgs";
import { UserModel } from "../../userModel/base/UserModel";
import { NotificationSettingService } from "../notificationSetting.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NotificationSetting)
export class NotificationSettingResolverBase {
  constructor(
    protected readonly service: NotificationSettingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "read",
    possession: "any",
  })
  async _notificationSettingsMeta(
    @graphql.Args() args: NotificationSettingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NotificationSetting])
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "read",
    possession: "any",
  })
  async notificationSettings(
    @graphql.Args() args: NotificationSettingFindManyArgs
  ): Promise<NotificationSetting[]> {
    return this.service.notificationSettings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NotificationSetting, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "read",
    possession: "own",
  })
  async notificationSetting(
    @graphql.Args() args: NotificationSettingFindUniqueArgs
  ): Promise<NotificationSetting | null> {
    const result = await this.service.notificationSetting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NotificationSetting)
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "create",
    possession: "any",
  })
  async createNotificationSetting(
    @graphql.Args() args: CreateNotificationSettingArgs
  ): Promise<NotificationSetting> {
    return await this.service.createNotificationSetting({
      ...args,
      data: {
        ...args.data,

        userModels: args.data.userModels
          ? {
              connect: args.data.userModels,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NotificationSetting)
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "update",
    possession: "any",
  })
  async updateNotificationSetting(
    @graphql.Args() args: UpdateNotificationSettingArgs
  ): Promise<NotificationSetting | null> {
    try {
      return await this.service.updateNotificationSetting({
        ...args,
        data: {
          ...args.data,

          userModels: args.data.userModels
            ? {
                connect: args.data.userModels,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NotificationSetting)
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "delete",
    possession: "any",
  })
  async deleteNotificationSetting(
    @graphql.Args() args: DeleteNotificationSettingArgs
  ): Promise<NotificationSetting | null> {
    try {
      return await this.service.deleteNotificationSetting(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserModel, {
    nullable: true,
    name: "userModels",
  })
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "read",
    possession: "any",
  })
  async getUserModels(
    @graphql.Parent() parent: NotificationSetting
  ): Promise<UserModel | null> {
    const result = await this.service.getUserModels(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
