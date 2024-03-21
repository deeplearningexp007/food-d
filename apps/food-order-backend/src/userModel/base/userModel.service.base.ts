/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserModel, // @ts-ignore
  AccessLog, // @ts-ignore
  CouponRedemption, // @ts-ignore
  CustomerPreference, // @ts-ignore
  CustomerSubscription, // @ts-ignore
  ErrorLog, // @ts-ignore
  Favorite, // @ts-ignore
  Notification, // @ts-ignore
  NotificationSetting, // @ts-ignore
  Order, // @ts-ignore
  Report, // @ts-ignore
  Reservation, // @ts-ignore
  Review, // @ts-ignore
  Reward, // @ts-ignore
  Subscription, // @ts-ignore
  Transaction, // @ts-ignore
  UserAddress, // @ts-ignore
  Wishlist,
} from "@prisma/client";

export class UserModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserModelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelCountArgs>
  ): Promise<number> {
    return this.prisma.userModel.count(args);
  }

  async userModels<T extends Prisma.UserModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelFindManyArgs>
  ): Promise<UserModel[]> {
    return this.prisma.userModel.findMany(args);
  }
  async userModel<T extends Prisma.UserModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelFindUniqueArgs>
  ): Promise<UserModel | null> {
    return this.prisma.userModel.findUnique(args);
  }
  async createUserModel<T extends Prisma.UserModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelCreateArgs>
  ): Promise<UserModel> {
    return this.prisma.userModel.create<T>(args);
  }
  async updateUserModel<T extends Prisma.UserModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelUpdateArgs>
  ): Promise<UserModel> {
    return this.prisma.userModel.update<T>(args);
  }
  async deleteUserModel<T extends Prisma.UserModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserModelDeleteArgs>
  ): Promise<UserModel> {
    return this.prisma.userModel.delete(args);
  }

  async findAccessLogs(
    parentId: number,
    args: Prisma.AccessLogFindManyArgs
  ): Promise<AccessLog[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accessLogs(args);
  }

  async findCouponRedemptions(
    parentId: number,
    args: Prisma.CouponRedemptionFindManyArgs
  ): Promise<CouponRedemption[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .couponRedemptions(args);
  }

  async findCustomerPreferences(
    parentId: number,
    args: Prisma.CustomerPreferenceFindManyArgs
  ): Promise<CustomerPreference[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerPreferences(args);
  }

  async findCustomerSubscriptions(
    parentId: number,
    args: Prisma.CustomerSubscriptionFindManyArgs
  ): Promise<CustomerSubscription[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerSubscriptions(args);
  }

  async findErrorLogs(
    parentId: number,
    args: Prisma.ErrorLogFindManyArgs
  ): Promise<ErrorLog[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .errorLogs(args);
  }

  async findFavorites(
    parentId: number,
    args: Prisma.FavoriteFindManyArgs
  ): Promise<Favorite[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favorites(args);
  }

  async findNotifications(
    parentId: number,
    args: Prisma.NotificationFindManyArgs
  ): Promise<Notification[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }

  async findNotificationSettings(
    parentId: number,
    args: Prisma.NotificationSettingFindManyArgs
  ): Promise<NotificationSetting[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notificationSettings(args);
  }

  async findOrders(
    parentId: number,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findReports(
    parentId: number,
    args: Prisma.ReportFindManyArgs
  ): Promise<Report[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reports(args);
  }

  async findReservations(
    parentId: number,
    args: Prisma.ReservationFindManyArgs
  ): Promise<Reservation[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reservations(args);
  }

  async findReviews(
    parentId: number,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }

  async findRewards(
    parentId: number,
    args: Prisma.RewardFindManyArgs
  ): Promise<Reward[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rewards(args);
  }

  async findSubscriptions(
    parentId: number,
    args: Prisma.SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subscriptions(args);
  }

  async findTransactions(
    parentId: number,
    args: Prisma.TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }

  async findUserAddresses(
    parentId: number,
    args: Prisma.UserAddressFindManyArgs
  ): Promise<UserAddress[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userAddresses(args);
  }

  async findWishlist(
    parentId: number,
    args: Prisma.WishlistFindManyArgs
  ): Promise<Wishlist[]> {
    return this.prisma.userModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wishlist(args);
  }
}