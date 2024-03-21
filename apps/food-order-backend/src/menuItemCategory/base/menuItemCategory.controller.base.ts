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
import { MenuItemCategoryService } from "../menuItemCategory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuItemCategoryCreateInput } from "./MenuItemCategoryCreateInput";
import { MenuItemCategory } from "./MenuItemCategory";
import { MenuItemCategoryFindManyArgs } from "./MenuItemCategoryFindManyArgs";
import { MenuItemCategoryWhereUniqueInput } from "./MenuItemCategoryWhereUniqueInput";
import { MenuItemCategoryUpdateInput } from "./MenuItemCategoryUpdateInput";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuItemCategoryControllerBase {
  constructor(
    protected readonly service: MenuItemCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MenuItemCategory })
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMenuItemCategory(
    @common.Body() data: MenuItemCategoryCreateInput
  ): Promise<MenuItemCategory> {
    return await this.service.createMenuItemCategory({
      data: {
        ...data,

        menuItemsMenuItemCategoriesMenuItemIdToMenuItems:
          data.menuItemsMenuItemCategoriesMenuItemIdToMenuItems
            ? {
                connect: data.menuItemsMenuItemCategoriesMenuItemIdToMenuItems,
              }
            : undefined,
      },
      select: {
        id: true,

        menuItemsMenuItemCategoriesMenuItemIdToMenuItems: {
          select: {
            id: true,
          },
        },

        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MenuItemCategory] })
  @ApiNestedQuery(MenuItemCategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async menuItemCategories(
    @common.Req() request: Request
  ): Promise<MenuItemCategory[]> {
    const args = plainToClass(MenuItemCategoryFindManyArgs, request.query);
    return this.service.menuItemCategories({
      ...args,
      select: {
        id: true,

        menuItemsMenuItemCategoriesMenuItemIdToMenuItems: {
          select: {
            id: true,
          },
        },

        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MenuItemCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async menuItemCategory(
    @common.Param() params: MenuItemCategoryWhereUniqueInput
  ): Promise<MenuItemCategory | null> {
    const result = await this.service.menuItemCategory({
      where: params,
      select: {
        id: true,

        menuItemsMenuItemCategoriesMenuItemIdToMenuItems: {
          select: {
            id: true,
          },
        },

        name: true,
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
  @swagger.ApiOkResponse({ type: MenuItemCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMenuItemCategory(
    @common.Param() params: MenuItemCategoryWhereUniqueInput,
    @common.Body() data: MenuItemCategoryUpdateInput
  ): Promise<MenuItemCategory | null> {
    try {
      return await this.service.updateMenuItemCategory({
        where: params,
        data: {
          ...data,

          menuItemsMenuItemCategoriesMenuItemIdToMenuItems:
            data.menuItemsMenuItemCategoriesMenuItemIdToMenuItems
              ? {
                  connect:
                    data.menuItemsMenuItemCategoriesMenuItemIdToMenuItems,
                }
              : undefined,
        },
        select: {
          id: true,

          menuItemsMenuItemCategoriesMenuItemIdToMenuItems: {
            select: {
              id: true,
            },
          },

          name: true,
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
  @swagger.ApiOkResponse({ type: MenuItemCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMenuItemCategory(
    @common.Param() params: MenuItemCategoryWhereUniqueInput
  ): Promise<MenuItemCategory | null> {
    try {
      return await this.service.deleteMenuItemCategory({
        where: params,
        select: {
          id: true,

          menuItemsMenuItemCategoriesMenuItemIdToMenuItems: {
            select: {
              id: true,
            },
          },

          name: true,
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
  @common.Get("/:id/menuItemsMenuItemsCategoryIdToMenuItemCategories")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findMenuItemsMenuItemsCategoryIdToMenuItemCategories(
    @common.Req() request: Request,
    @common.Param() params: MenuItemCategoryWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results =
      await this.service.findMenuItemsMenuItemsCategoryIdToMenuItemCategories(
        params.id,
        {
          ...query,
          select: {
            availableQuantity: true,
            description: true,
            hashtags: true,
            id: true,
            imageUrl: true,
            ingredients: true,
            isActive: true,
            isVegetarian: true,

            menuItemCategoriesMenuItemsCategoryIdToMenuItemCategories: {
              select: {
                id: true,
              },
            },

            menus: {
              select: {
                id: true,
              },
            },

            name: true,
            preparationTime: true,
            price: true,
            shareSlug: true,
          },
        }
      );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/menuItemsMenuItemsCategoryIdToMenuItemCategories")
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "update",
    possession: "any",
  })
  async connectMenuItemsMenuItemsCategoryIdToMenuItemCategories(
    @common.Param() params: MenuItemCategoryWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsMenuItemsCategoryIdToMenuItemCategories: {
        connect: body,
      },
    };
    await this.service.updateMenuItemCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItemsMenuItemsCategoryIdToMenuItemCategories")
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "update",
    possession: "any",
  })
  async updateMenuItemsMenuItemsCategoryIdToMenuItemCategories(
    @common.Param() params: MenuItemCategoryWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsMenuItemsCategoryIdToMenuItemCategories: {
        set: body,
      },
    };
    await this.service.updateMenuItemCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItemsMenuItemsCategoryIdToMenuItemCategories")
  @nestAccessControl.UseRoles({
    resource: "MenuItemCategory",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItemsMenuItemsCategoryIdToMenuItemCategories(
    @common.Param() params: MenuItemCategoryWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItemsMenuItemsCategoryIdToMenuItemCategories: {
        disconnect: body,
      },
    };
    await this.service.updateMenuItemCategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
