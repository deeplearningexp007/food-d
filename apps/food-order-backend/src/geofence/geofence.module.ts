import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeofenceModuleBase } from "./base/geofence.module.base";
import { GeofenceService } from "./geofence.service";
import { GeofenceController } from "./geofence.controller";
import { GeofenceResolver } from "./geofence.resolver";

@Module({
  imports: [GeofenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeofenceController],
  providers: [GeofenceService, GeofenceResolver],
  exports: [GeofenceService],
})
export class GeofenceModule {}
