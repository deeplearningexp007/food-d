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
import { SystemSettingWhereUniqueInput } from "./SystemSettingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class SystemSettingFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => SystemSettingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SystemSettingWhereUniqueInput)
  @Field(() => SystemSettingWhereUniqueInput, { nullable: false })
  where!: SystemSettingWhereUniqueInput;
}

export { SystemSettingFindUniqueArgs as SystemSettingFindUniqueArgs };