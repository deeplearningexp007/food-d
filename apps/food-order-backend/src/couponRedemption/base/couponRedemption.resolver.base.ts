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
import { CouponRedemption } from "./CouponRedemption";
import { CouponRedemptionCountArgs } from "./CouponRedemptionCountArgs";
import { CouponRedemptionFindManyArgs } from "./CouponRedemptionFindManyArgs";
import { CouponRedemptionFindUniqueArgs } from "./CouponRedemptionFindUniqueArgs";
import { CreateCouponRedemptionArgs } from "./CreateCouponRedemptionArgs";
import { UpdateCouponRedemptionArgs } from "./UpdateCouponRedemptionArgs";
import { DeleteCouponRedemptionArgs } from "./DeleteCouponRedemptionArgs";
import { Coupon } from "../../coupon/base/Coupon";
import { UserModel } from "../../userModel/base/UserModel";
import { CouponRedemptionService } from "../couponRedemption.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CouponRedemption)
export class CouponRedemptionResolverBase {
  constructor(
    protected readonly service: CouponRedemptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "read",
    possession: "any",
  })
  async _couponRedemptionsMeta(
    @graphql.Args() args: CouponRedemptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CouponRedemption])
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "read",
    possession: "any",
  })
  async couponRedemptions(
    @graphql.Args() args: CouponRedemptionFindManyArgs
  ): Promise<CouponRedemption[]> {
    return this.service.couponRedemptions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CouponRedemption, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "read",
    possession: "own",
  })
  async couponRedemption(
    @graphql.Args() args: CouponRedemptionFindUniqueArgs
  ): Promise<CouponRedemption | null> {
    const result = await this.service.couponRedemption(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CouponRedemption)
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "create",
    possession: "any",
  })
  async createCouponRedemption(
    @graphql.Args() args: CreateCouponRedemptionArgs
  ): Promise<CouponRedemption> {
    return await this.service.createCouponRedemption({
      ...args,
      data: {
        ...args.data,

        coupons: {
          connect: args.data.coupons,
        },

        userModels: {
          connect: args.data.userModels,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CouponRedemption)
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "update",
    possession: "any",
  })
  async updateCouponRedemption(
    @graphql.Args() args: UpdateCouponRedemptionArgs
  ): Promise<CouponRedemption | null> {
    try {
      return await this.service.updateCouponRedemption({
        ...args,
        data: {
          ...args.data,

          coupons: {
            connect: args.data.coupons,
          },

          userModels: {
            connect: args.data.userModels,
          },
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

  @graphql.Mutation(() => CouponRedemption)
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "delete",
    possession: "any",
  })
  async deleteCouponRedemption(
    @graphql.Args() args: DeleteCouponRedemptionArgs
  ): Promise<CouponRedemption | null> {
    try {
      return await this.service.deleteCouponRedemption(args);
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
  @graphql.ResolveField(() => Coupon, {
    nullable: true,
    name: "coupons",
  })
  @nestAccessControl.UseRoles({
    resource: "Coupon",
    action: "read",
    possession: "any",
  })
  async getCoupons(
    @graphql.Parent() parent: CouponRedemption
  ): Promise<Coupon | null> {
    const result = await this.service.getCoupons(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
    @graphql.Parent() parent: CouponRedemption
  ): Promise<UserModel | null> {
    const result = await this.service.getUserModels(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
