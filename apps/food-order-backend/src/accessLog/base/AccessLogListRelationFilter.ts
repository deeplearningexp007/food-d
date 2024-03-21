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
import { AccessLogWhereInput } from "./AccessLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccessLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccessLogWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessLogWhereInput)
  @IsOptional()
  @Field(() => AccessLogWhereInput, {
    nullable: true,
  })
  every?: AccessLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccessLogWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessLogWhereInput)
  @IsOptional()
  @Field(() => AccessLogWhereInput, {
    nullable: true,
  })
  some?: AccessLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccessLogWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessLogWhereInput)
  @IsOptional()
  @Field(() => AccessLogWhereInput, {
    nullable: true,
  })
  none?: AccessLogWhereInput;
}
export { AccessLogListRelationFilter as AccessLogListRelationFilter };