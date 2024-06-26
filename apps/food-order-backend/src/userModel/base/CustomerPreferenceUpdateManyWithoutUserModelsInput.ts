/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomerPreferenceWhereUniqueInput } from "../../customerPreference/base/CustomerPreferenceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerPreferenceUpdateManyWithoutUserModelsInput {
  @Field(() => [CustomerPreferenceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerPreferenceWhereUniqueInput],
  })
  connect?: Array<CustomerPreferenceWhereUniqueInput>;

  @Field(() => [CustomerPreferenceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerPreferenceWhereUniqueInput],
  })
  disconnect?: Array<CustomerPreferenceWhereUniqueInput>;

  @Field(() => [CustomerPreferenceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerPreferenceWhereUniqueInput],
  })
  set?: Array<CustomerPreferenceWhereUniqueInput>;
}

export { CustomerPreferenceUpdateManyWithoutUserModelsInput as CustomerPreferenceUpdateManyWithoutUserModelsInput };
