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
import { CouponWhereUniqueInput } from "../../coupon/base/CouponWhereUniqueInput";
import { ValidateNested, IsOptional, IsBoolean, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { UserModelWhereUniqueInput } from "../../userModel/base/UserModelWhereUniqueInput";

@InputType()
class CouponRedemptionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CouponWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CouponWhereUniqueInput)
  @IsOptional()
  @Field(() => CouponWhereUniqueInput, {
    nullable: true,
  })
  coupons?: CouponWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRedeemed?: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  redemptionDate?: Date;

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

export { CouponRedemptionUpdateInput as CouponRedemptionUpdateInput };
