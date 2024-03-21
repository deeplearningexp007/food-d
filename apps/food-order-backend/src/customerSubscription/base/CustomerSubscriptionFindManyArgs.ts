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
import { CustomerSubscriptionWhereInput } from "./CustomerSubscriptionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomerSubscriptionOrderByInput } from "./CustomerSubscriptionOrderByInput";

@ArgsType()
class CustomerSubscriptionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerSubscriptionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomerSubscriptionWhereInput, { nullable: true })
  @Type(() => CustomerSubscriptionWhereInput)
  where?: CustomerSubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomerSubscriptionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomerSubscriptionOrderByInput], { nullable: true })
  @Type(() => CustomerSubscriptionOrderByInput)
  orderBy?: Array<CustomerSubscriptionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomerSubscriptionFindManyArgs as CustomerSubscriptionFindManyArgs };