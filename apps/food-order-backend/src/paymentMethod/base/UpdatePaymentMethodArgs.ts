/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentMethodWhereUniqueInput } from "./PaymentMethodWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentMethodUpdateInput } from "./PaymentMethodUpdateInput";

@ArgsType()
class UpdatePaymentMethodArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodWhereUniqueInput)
  @Field(() => PaymentMethodWhereUniqueInput, { nullable: false })
  where!: PaymentMethodWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentMethodUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodUpdateInput)
  @Field(() => PaymentMethodUpdateInput, { nullable: false })
  data!: PaymentMethodUpdateInput;
}

export { UpdatePaymentMethodArgs as UpdatePaymentMethodArgs };
