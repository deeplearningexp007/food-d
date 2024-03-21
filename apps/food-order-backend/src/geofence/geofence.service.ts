import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeofenceServiceBase } from "./base/geofence.service.base";

@Injectable()
export class GeofenceService extends GeofenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
