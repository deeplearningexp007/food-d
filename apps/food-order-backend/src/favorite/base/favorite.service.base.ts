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
  Favorite, // @ts-ignore
  FavoriteMenuItem, // @ts-ignore
  FavoriteRestaurant, // @ts-ignore
  UserModel,
} from "@prisma/client";

export class FavoriteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FavoriteCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCountArgs>
  ): Promise<number> {
    return this.prisma.favorite.count(args);
  }

  async favorites<T extends Prisma.FavoriteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteFindManyArgs>
  ): Promise<Favorite[]> {
    return this.prisma.favorite.findMany(args);
  }
  async favorite<T extends Prisma.FavoriteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteFindUniqueArgs>
  ): Promise<Favorite | null> {
    return this.prisma.favorite.findUnique(args);
  }
  async createFavorite<T extends Prisma.FavoriteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteCreateArgs>
  ): Promise<Favorite> {
    return this.prisma.favorite.create<T>(args);
  }
  async updateFavorite<T extends Prisma.FavoriteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteUpdateArgs>
  ): Promise<Favorite> {
    return this.prisma.favorite.update<T>(args);
  }
  async deleteFavorite<T extends Prisma.FavoriteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FavoriteDeleteArgs>
  ): Promise<Favorite> {
    return this.prisma.favorite.delete(args);
  }

  async findFavoriteMenuItems(
    parentId: number,
    args: Prisma.FavoriteMenuItemFindManyArgs
  ): Promise<FavoriteMenuItem[]> {
    return this.prisma.favorite
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favoriteMenuItems(args);
  }

  async findFavoriteRestaurants(
    parentId: number,
    args: Prisma.FavoriteRestaurantFindManyArgs
  ): Promise<FavoriteRestaurant[]> {
    return this.prisma.favorite
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .favoriteRestaurants(args);
  }

  async getUserModels(parentId: number): Promise<UserModel | null> {
    return this.prisma.favorite
      .findUnique({
        where: { id: parentId },
      })
      .userModels();
  }
}