import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeoLocationServiceBase } from "./base/geoLocation.service.base";

@Injectable()
export class GeoLocationService extends GeoLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
