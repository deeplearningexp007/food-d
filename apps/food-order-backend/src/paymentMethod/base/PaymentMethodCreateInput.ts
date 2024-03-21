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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { OrderCreateNestedManyWithoutPaymentMethodsInput } from "./OrderCreateNestedManyWithoutPaymentMethodsInput";
import { Type } from "class-transformer";
import { PaymentCreateNestedManyWithoutPaymentMethodsInput } from "./PaymentCreateNestedManyWithoutPaymentMethodsInput";

@InputType()
class PaymentMethodCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  methodDetails?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  methodName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutPaymentMethodsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutPaymentMethodsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutPaymentMethodsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutPaymentMethodsInput;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutPaymentMethodsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutPaymentMethodsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutPaymentMethodsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutPaymentMethodsInput;
}

export { PaymentMethodCreateInput as PaymentMethodCreateInput };