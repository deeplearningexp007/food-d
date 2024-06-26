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
import { FavoriteMenuItemWhereUniqueInput } from "./FavoriteMenuItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FavoriteMenuItemUpdateInput } from "./FavoriteMenuItemUpdateInput";

@ArgsType()
class UpdateFavoriteMenuItemArgs {
  @ApiProperty({
    required: true,
    type: () => FavoriteMenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FavoriteMenuItemWhereUniqueInput)
  @Field(() => FavoriteMenuItemWhereUniqueInput, { nullable: false })
  where!: FavoriteMenuItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FavoriteMenuItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => FavoriteMenuItemUpdateInput)
  @Field(() => FavoriteMenuItemUpdateInput, { nullable: false })
  data!: FavoriteMenuItemUpdateInput;
}

export { UpdateFavoriteMenuItemArgs as UpdateFavoriteMenuItemArgs };
