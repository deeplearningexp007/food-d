import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeoLocationModuleBase } from "./base/geoLocation.module.base";
import { GeoLocationService } from "./geoLocation.service";
import { GeoLocationController } from "./geoLocation.controller";
import { GeoLocationResolver } from "./geoLocation.resolver";

@Module({
  imports: [GeoLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeoLocationController],
  providers: [GeoLocationService, GeoLocationResolver],
  exports: [GeoLocationService],
})
export class GeoLocationModule {}
