/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserAddressService } from "../userAddress.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserAddressCreateInput } from "./UserAddressCreateInput";
import { UserAddress } from "./UserAddress";
import { UserAddressFindManyArgs } from "./UserAddressFindManyArgs";
import { UserAddressWhereUniqueInput } from "./UserAddressWhereUniqueInput";
import { UserAddressUpdateInput } from "./UserAddressUpdateInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserAddressControllerBase {
  constructor(
    protected readonly service: UserAddressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserAddress })
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserAddress(
    @common.Body() data: UserAddressCreateInput
  ): Promise<UserAddress> {
    return await this.service.createUserAddress({
      data: {
        ...data,

        userModels: data.userModels
          ? {
              connect: data.userModels,
            }
          : undefined,
      },
      select: {
        addressLine1: true,
        addressLine2: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        isPrimary: true,
        pincode: true,
        state: true,
        updatedAt: true,

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserAddress] })
  @ApiNestedQuery(UserAddressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userAddresses(@common.Req() request: Request): Promise<UserAddress[]> {
    const args = plainToClass(UserAddressFindManyArgs, request.query);
    return this.service.userAddresses({
      ...args,
      select: {
        addressLine1: true,
        addressLine2: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        isPrimary: true,
        pincode: true,
        state: true,
        updatedAt: true,

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userAddress(
    @common.Param() params: UserAddressWhereUniqueInput
  ): Promise<UserAddress | null> {
    const result = await this.service.userAddress({
      where: params,
      select: {
        addressLine1: true,
        addressLine2: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        isPrimary: true,
        pincode: true,
        state: true,
        updatedAt: true,

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserAddress(
    @common.Param() params: UserAddressWhereUniqueInput,
    @common.Body() data: UserAddressUpdateInput
  ): Promise<UserAddress | null> {
    try {
      return await this.service.updateUserAddress({
        where: params,
        data: {
          ...data,

          userModels: data.userModels
            ? {
                connect: data.userModels,
              }
            : undefined,
        },
        select: {
          addressLine1: true,
          addressLine2: true,
          city: true,
          country: true,
          createdAt: true,
          id: true,
          isPrimary: true,
          pincode: true,
          state: true,
          updatedAt: true,

          userModels: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserAddress(
    @common.Param() params: UserAddressWhereUniqueInput
  ): Promise<UserAddress | null> {
    try {
      return await this.service.deleteUserAddress({
        where: params,
        select: {
          addressLine1: true,
          addressLine2: true,
          city: true,
          country: true,
          createdAt: true,
          id: true,
          isPrimary: true,
          pincode: true,
          state: true,
          updatedAt: true,

          userModels: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: UserAddressWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        coupons: {
          select: {
            id: true,
          },
        },

        deliveryTime: true,
        discountAmount: true,
        finalAmount: true,
        id: true,
        isDelivered: true,
        isPaid: true,
        orderDate: true,
        orderType: true,

        paymentMethods: {
          select: {
            id: true,
          },
        },

        restaurants: {
          select: {
            id: true,
          },
        },

        scheduledDeliveryTime: true,
        specialInstructions: true,
        status: true,
        totalAmount: true,

        userAddresses: {
          select: {
            id: true,
          },
        },

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "update",
    possession: "any",
  })
  async connectOrders(
    @common.Param() params: UserAddressWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateUserAddress({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: UserAddressWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateUserAddress({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "UserAddress",
    action: "update",
    possession: "any",
  })
  async disconnectOrders(
    @common.Param() params: UserAddressWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateUserAddress({
      where: params,
      data,
      select: { id: true },
    });
  }
}
