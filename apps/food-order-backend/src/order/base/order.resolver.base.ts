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
import { Order } from "./Order";
import { OrderCountArgs } from "./OrderCountArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderItemFindManyArgs } from "../../orderItem/base/OrderItemFindManyArgs";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { Coupon } from "../../coupon/base/Coupon";
import { PaymentMethod } from "../../paymentMethod/base/PaymentMethod";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { UserAddress } from "../../userAddress/base/UserAddress";
import { UserModel } from "../../userModel/base/UserModel";
import { OrderService } from "../order.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async _ordersMeta(
    @graphql.Args() args: OrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.orders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.order(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.createOrder({
      ...args,
      data: {
        ...args.data,

        coupons: args.data.coupons
          ? {
              connect: args.data.coupons,
            }
          : undefined,

        paymentMethods: args.data.paymentMethods
          ? {
              connect: args.data.paymentMethods,
            }
          : undefined,

        restaurants: args.data.restaurants
          ? {
              connect: args.data.restaurants,
            }
          : undefined,

        userAddresses: args.data.userAddresses
          ? {
              connect: args.data.userAddresses,
            }
          : undefined,

        userModels: args.data.userModels
          ? {
              connect: args.data.userModels,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        ...args,
        data: {
          ...args.data,

          coupons: args.data.coupons
            ? {
                connect: args.data.coupons,
              }
            : undefined,

          paymentMethods: args.data.paymentMethods
            ? {
                connect: args.data.paymentMethods,
              }
            : undefined,

          restaurants: args.data.restaurants
            ? {
                connect: args.data.restaurants,
              }
            : undefined,

          userAddresses: args.data.userAddresses
            ? {
                connect: args.data.userAddresses,
              }
            : undefined,

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

  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder(args);
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
  @graphql.ResolveField(() => [OrderItem], { name: "orderItems" })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async findOrderItems(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    const results = await this.service.findOrderItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Payment], { name: "payments" })
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async findPayments(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    const results = await this.service.findPayments(parent.id, args);

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
    @graphql.Parent() parent: Order,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getCoupons(@graphql.Parent() parent: Order): Promise<Coupon | null> {
    const result = await this.service.getCoupons(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentMethod, {
    nullable: true,
    name: "paymentMethods",
  })
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "read",
    possession: "any",
  })
  async getPaymentMethods(
    @graphql.Parent() parent: Order
  ): Promise<PaymentMethod | null> {
    const result = await this.service.getPaymentMethods(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, {
    nullable: true,
    name: "restaurants",
  })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async getRestaurants(
    @graphql.Parent() parent: Order
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurants(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserAddress, {
    nullable: true,
    name: "userAddresses",
  })
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "read",
    possession: "any",
  })
  async getUserAddresses(
    @graphql.Parent() parent: Order
  ): Promise<UserAddress | null> {
    const result = await this.service.getUserAddresses(parent.id);

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
    @graphql.Parent() parent: Order
  ): Promise<UserModel | null> {
    const result = await this.service.getUserModels(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
