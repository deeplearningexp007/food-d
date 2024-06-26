/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FavoriteMenuItemListRelationFilter } from "../../favoriteMenuItem/base/FavoriteMenuItemListRelationFilter";
import { FavoriteRestaurantListRelationFilter } from "../../favoriteRestaurant/base/FavoriteRestaurantListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserModelWhereUniqueInput } from "../../userModel/base/UserModelWhereUniqueInput";

@InputType()
class FavoriteWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FavoriteMenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FavoriteMenuItemListRelationFilter)
  @IsOptional()
  @Field(() => FavoriteMenuItemListRelationFilter, {
    nullable: true,
  })
  favoriteMenuItems?: FavoriteMenuItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FavoriteRestaurantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FavoriteRestaurantListRelationFilter)
  @IsOptional()
  @Field(() => FavoriteRestaurantListRelationFilter, {
    nullable: true,
  })
  favoriteRestaurants?: FavoriteRestaurantListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserModelWhereUniqueInput)
  @IsOptional()
  @Field(() => UserModelWhereUniqueInput, {
    nullable: true,
  })
  userModels?: UserModelWhereUniqueInput;
}

export { FavoriteWhereInput as FavoriteWhereInput };
