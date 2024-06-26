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
import { UserModel } from "./UserModel";
import { UserModelCountArgs } from "./UserModelCountArgs";
import { UserModelFindManyArgs } from "./UserModelFindManyArgs";
import { UserModelFindUniqueArgs } from "./UserModelFindUniqueArgs";
import { CreateUserModelArgs } from "./CreateUserModelArgs";
import { UpdateUserModelArgs } from "./UpdateUserModelArgs";
import { DeleteUserModelArgs } from "./DeleteUserModelArgs";
import { AccessLogFindManyArgs } from "../../accessLog/base/AccessLogFindManyArgs";
import { AccessLog } from "../../accessLog/base/AccessLog";
import { CouponRedemptionFindManyArgs } from "../../couponRedemption/base/CouponRedemptionFindManyArgs";
import { CouponRedemption } from "../../couponRedemption/base/CouponRedemption";
import { CustomerPreferenceFindManyArgs } from "../../customerPreference/base/CustomerPreferenceFindManyArgs";
import { CustomerPreference } from "../../customerPreference/base/CustomerPreference";
import { CustomerSubscriptionFindManyArgs } from "../../customerSubscription/base/CustomerSubscriptionFindManyArgs";
import { CustomerSubscription } from "../../customerSubscription/base/CustomerSubscription";
import { ErrorLogFindManyArgs } from "../../errorLog/base/ErrorLogFindManyArgs";
import { ErrorLog } from "../../errorLog/base/ErrorLog";
import { FavoriteFindManyArgs } from "../../favorite/base/FavoriteFindManyArgs";
import { Favorite } from "../../favorite/base/Favorite";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { NotificationSettingFindManyArgs } from "../../notificationSetting/base/NotificationSettingFindManyArgs";
import { NotificationSetting } from "../../notificationSetting/base/NotificationSetting";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { RewardFindManyArgs } from "../../reward/base/RewardFindManyArgs";
import { Reward } from "../../reward/base/Reward";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { UserAddressFindManyArgs } from "../../userAddress/base/UserAddressFindManyArgs";
import { UserAddress } from "../../userAddress/base/UserAddress";
import { WishlistFindManyArgs } from "../../wishlist/base/WishlistFindManyArgs";
import { Wishlist } from "../../wishlist/base/Wishlist";
import { UserModelService } from "../userModel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserModel)
export class UserModelResolverBase {
  constructor(
    protected readonly service: UserModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "read",
    possession: "any",
  })
  async _userModelsMeta(
    @graphql.Args() args: UserModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserModel])
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "read",
    possession: "any",
  })
  async userModels(
    @graphql.Args() args: UserModelFindManyArgs
  ): Promise<UserModel[]> {
    return this.service.userModels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserModel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "read",
    possession: "own",
  })
  async userModel(
    @graphql.Args() args: UserModelFindUniqueArgs
  ): Promise<UserModel | null> {
    const result = await this.service.userModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserModel)
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "create",
    possession: "any",
  })
  async createUserModel(
    @graphql.Args() args: CreateUserModelArgs
  ): Promise<UserModel> {
    return await this.service.createUserModel({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserModel)
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "update",
    possession: "any",
  })
  async updateUserModel(
    @graphql.Args() args: UpdateUserModelArgs
  ): Promise<UserModel | null> {
    try {
      return await this.service.updateUserModel({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => UserModel)
  @nestAccessControl.UseRoles({
    resource: "UserModel",
    action: "delete",
    possession: "any",
  })
  async deleteUserModel(
    @graphql.Args() args: DeleteUserModelArgs
  ): Promise<UserModel | null> {
    try {
      return await this.service.deleteUserModel(args);
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
  @graphql.ResolveField(() => [AccessLog], { name: "accessLogs" })
  @nestAccessControl.UseRoles({
    resource: "AccessLog",
    action: "read",
    possession: "any",
  })
  async findAccessLogs(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: AccessLogFindManyArgs
  ): Promise<AccessLog[]> {
    const results = await this.service.findAccessLogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CouponRedemption], { name: "couponRedemptions" })
  @nestAccessControl.UseRoles({
    resource: "CouponRedemption",
    action: "read",
    possession: "any",
  })
  async findCouponRedemptions(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: CouponRedemptionFindManyArgs
  ): Promise<CouponRedemption[]> {
    const results = await this.service.findCouponRedemptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CustomerPreference], {
    name: "customerPreferences",
  })
  @nestAccessControl.UseRoles({
    resource: "CustomerPreference",
    action: "read",
    possession: "any",
  })
  async findCustomerPreferences(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: CustomerPreferenceFindManyArgs
  ): Promise<CustomerPreference[]> {
    const results = await this.service.findCustomerPreferences(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CustomerSubscription], {
    name: "customerSubscriptions",
  })
  @nestAccessControl.UseRoles({
    resource: "CustomerSubscription",
    action: "read",
    possession: "any",
  })
  async findCustomerSubscriptions(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: CustomerSubscriptionFindManyArgs
  ): Promise<CustomerSubscription[]> {
    const results = await this.service.findCustomerSubscriptions(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ErrorLog], { name: "errorLogs" })
  @nestAccessControl.UseRoles({
    resource: "ErrorLog",
    action: "read",
    possession: "any",
  })
  async findErrorLogs(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: ErrorLogFindManyArgs
  ): Promise<ErrorLog[]> {
    const results = await this.service.findErrorLogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Favorite], { name: "favorites" })
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "read",
    possession: "any",
  })
  async findFavorites(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: FavoriteFindManyArgs
  ): Promise<Favorite[]> {
    const results = await this.service.findFavorites(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Notification], { name: "notifications" })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async findNotifications(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    const results = await this.service.findNotifications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [NotificationSetting], {
    name: "notificationSettings",
  })
  @nestAccessControl.UseRoles({
    resource: "NotificationSetting",
    action: "read",
    possession: "any",
  })
  async findNotificationSettings(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: NotificationSettingFindManyArgs
  ): Promise<NotificationSetting[]> {
    const results = await this.service.findNotificationSettings(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Order], { name: "orders" })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findOrders(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Report], { name: "reports" })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: ReportFindManyArgs
  ): Promise<Report[]> {
    const results = await this.service.findReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reservation], { name: "reservations" })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async findReservations(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: ReservationFindManyArgs
  ): Promise<Reservation[]> {
    const results = await this.service.findReservations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviews" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reward], { name: "rewards" })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "any",
  })
  async findRewards(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: RewardFindManyArgs
  ): Promise<Reward[]> {
    const results = await this.service.findRewards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Subscription], { name: "subscriptions" })
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  async findSubscriptions(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    const results = await this.service.findSubscriptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UserAddress], { name: "userAddresses" })
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "read",
    possession: "any",
  })
  async findUserAddresses(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: UserAddressFindManyArgs
  ): Promise<UserAddress[]> {
    const results = await this.service.findUserAddresses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Wishlist], { name: "wishlist" })
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "any",
  })
  async findWishlist(
    @graphql.Parent() parent: UserModel,
    @graphql.Args() args: WishlistFindManyArgs
  ): Promise<Wishlist[]> {
    const results = await this.service.findWishlist(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
