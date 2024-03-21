/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsInt,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { Decimal } from "decimal.js";

@ObjectType()
class OrderItem {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customizationOptions!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  itemDescription!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  itemImage!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  itemName!: string | null;

  @ApiProperty({
    required: false,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: MenuItem | null;

  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Order | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  price!: Decimal | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity!: number | null;
}

export { OrderItem as OrderItem };
