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
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class TransactionStatusCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereUniqueInput)
  @IsOptional()
  @Field(() => TransactionWhereUniqueInput, {
    nullable: true,
  })
  transactions?: TransactionWhereUniqueInput | null;
}

export { TransactionStatusCreateInput as TransactionStatusCreateInput };
