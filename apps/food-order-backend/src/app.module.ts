import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AccessLogModule } from "./accessLog/accessLog.module";
import { CouponRedemptionModule } from "./couponRedemption/couponRedemption.module";
import { CouponModule } from "./coupon/coupon.module";
import { CustomerPreferenceModule } from "./customerPreference/customerPreference.module";
import { CustomerSubscriptionModule } from "./customerSubscription/customerSubscription.module";
import { ErrorLogModule } from "./errorLog/errorLog.module";
import { FavoriteMenuItemModule } from "./favoriteMenuItem/favoriteMenuItem.module";
import { FavoriteRestaurantModule } from "./favoriteRestaurant/favoriteRestaurant.module";
import { FavoriteModule } from "./favorite/favorite.module";
import { GeoLocationModule } from "./geoLocation/geoLocation.module";
import { GeofenceModule } from "./geofence/geofence.module";
import { HashtagModule } from "./hashtag/hashtag.module";
import { MenuItemCategoryModule } from "./menuItemCategory/menuItemCategory.module";
import { MenuItemModule } from "./menuItem/menuItem.module";
import { MenuModule } from "./menu/menu.module";
import { NotificationSettingModule } from "./notificationSetting/notificationSetting.module";
import { NotificationModule } from "./notification/notification.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { OrderModule } from "./order/order.module";
import { PaymentMethodModule } from "./paymentMethod/paymentMethod.module";
import { PaymentModule } from "./payment/payment.module";
import { ReportModule } from "./report/report.module";
import { ReservationModule } from "./reservation/reservation.module";
import { RestaurantDetailModule } from "./restaurantDetail/restaurantDetail.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { ReviewRatingModule } from "./reviewRating/reviewRating.module";
import { ReviewModule } from "./review/review.module";
import { RewardModule } from "./reward/reward.module";
import { SubscriptionPlanModule } from "./subscriptionPlan/subscriptionPlan.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SystemSettingModule } from "./systemSetting/systemSetting.module";
import { TransactionStatusModule } from "./transactionStatus/transactionStatus.module";
import { TransactionModule } from "./transaction/transaction.module";
import { UserAddressModule } from "./userAddress/userAddress.module";
import { UserModelModule } from "./userModel/userModel.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    AccessLogModule,
    CouponRedemptionModule,
    CouponModule,
    CustomerPreferenceModule,
    CustomerSubscriptionModule,
    ErrorLogModule,
    FavoriteMenuItemModule,
    FavoriteRestaurantModule,
    FavoriteModule,
    GeoLocationModule,
    GeofenceModule,
    HashtagModule,
    MenuItemCategoryModule,
    MenuItemModule,
    MenuModule,
    NotificationSettingModule,
    NotificationModule,
    OrderItemModule,
    OrderModule,
    PaymentMethodModule,
    PaymentModule,
    ReportModule,
    ReservationModule,
    RestaurantDetailModule,
    RestaurantModule,
    ReviewRatingModule,
    ReviewModule,
    RewardModule,
    SubscriptionPlanModule,
    SubscriptionModule,
    SystemSettingModule,
    TransactionStatusModule,
    TransactionModule,
    UserAddressModule,
    UserModelModule,
    WishlistModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
