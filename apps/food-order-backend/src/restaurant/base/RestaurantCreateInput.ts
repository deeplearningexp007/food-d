/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber,
  IsDate,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput } from "./FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput";
import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";
import { OrderCreateNestedManyWithoutRestaurantsInput } from "./OrderCreateNestedManyWithoutRestaurantsInput";
import { ReservationCreateNestedManyWithoutRestaurantsInput } from "./ReservationCreateNestedManyWithoutRestaurantsInput";
import { RestaurantDetailCreateNestedManyWithoutRestaurantsInput } from "./RestaurantDetailCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";

@InputType()
class RestaurantCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  averageCost?: Decimal | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  closingHours?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  favoriteRestaurants?: FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filterTag?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hashtags?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => MenuCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => MenuCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => MenuCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  openingHours?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReservationCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => ReservationCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => ReservationCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  reservations?: ReservationCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: () => RestaurantDetailCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => RestaurantDetailCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => RestaurantDetailCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  restaurantDetails?: RestaurantDetailCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shareSlug?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { RestaurantCreateInput as RestaurantCreateInput };
