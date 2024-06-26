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
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { PaymentMethodWhereUniqueInput } from "../../paymentMethod/base/PaymentMethodWhereUniqueInput";

@InputType()
class PaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  orders?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  paymentAmount?: Decimal | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentMethodWhereUniqueInput, {
    nullable: true,
  })
  paymentMethods?: PaymentMethodWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymentStatus?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionId?: string | null;
}

export { PaymentUpdateInput as PaymentUpdateInput };
