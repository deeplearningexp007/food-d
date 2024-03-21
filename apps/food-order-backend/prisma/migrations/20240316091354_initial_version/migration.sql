-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessLogs" (
    "action" VARCHAR(255),
    "device_info" JSON,
    "error_message" TEXT,
    "log_id" SERIAL NOT NULL,
    "ip_address" VARCHAR(15),
    "response_status" INTEGER,
    "timestamp" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "AccessLogs_pkey" PRIMARY KEY ("log_id")
);

-- CreateTable
CREATE TABLE "CouponRedemptions" (
    "coupon_id" INTEGER NOT NULL,
    "redemption_id" SERIAL NOT NULL,
    "is_redeemed" BOOLEAN DEFAULT false,
    "redemption_date" DATE NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "CouponRedemptions_pkey" PRIMARY KEY ("redemption_id")
);

-- CreateTable
CREATE TABLE "Coupons" (
    "code" VARCHAR(255) NOT NULL,
    "discount_percentage" DECIMAL(5,2) NOT NULL,
    "expiration_date" DATE NOT NULL,
    "coupon_id" SERIAL NOT NULL,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "Coupons_pkey" PRIMARY KEY ("coupon_id")
);

-- CreateTable
CREATE TABLE "CustomerPreferences" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "preference_id" SERIAL NOT NULL,
    "preference_type" VARCHAR(255),
    "preference_value" VARCHAR(255),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "CustomerPreferences_pkey" PRIMARY KEY ("preference_id")
);

-- CreateTable
CREATE TABLE "CustomerSubscriptions" (
    "activation_date" DATE NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration_date" DATE,
    "customer_subscription_id" SERIAL NOT NULL,
    "renewal_count" INTEGER NOT NULL DEFAULT 0,
    "plan_id" INTEGER NOT NULL,
    "subscription_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "CustomerSubscriptions_pkey" PRIMARY KEY ("customer_subscription_id")
);

-- CreateTable
CREATE TABLE "ErrorLogs" (
    "error_code" INTEGER,
    "error_message" TEXT,
    "error_id" SERIAL NOT NULL,
    "request_info" JSON,
    "stack_trace" TEXT,
    "timestamp" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "ErrorLogs_pkey" PRIMARY KEY ("error_id")
);

-- CreateTable
CREATE TABLE "FavoriteMenuItems" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "favorite_id" INTEGER,
    "favorite_menu_item_id" SERIAL NOT NULL,
    "menu_item_id" INTEGER,

    CONSTRAINT "FavoriteMenuItems_pkey" PRIMARY KEY ("favorite_menu_item_id")
);

-- CreateTable
CREATE TABLE "FavoriteRestaurants" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "favorite_id" INTEGER,
    "favorite_restaurant_id" SERIAL NOT NULL,
    "restaurant_id" INTEGER,

    CONSTRAINT "FavoriteRestaurants_pkey" PRIMARY KEY ("favorite_restaurant_id")
);

-- CreateTable
CREATE TABLE "Favorites" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "favorite_id" SERIAL NOT NULL,
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("favorite_id")
);

-- CreateTable
CREATE TABLE "GeoLocations" (
    "address" TEXT,
    "city" VARCHAR(100),
    "country" VARCHAR(100),
    "location_id" SERIAL NOT NULL,
    "initial_signon" BOOLEAN DEFAULT false,
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "postal_code" VARCHAR(20),
    "state" VARCHAR(100),

    CONSTRAINT "GeoLocations_pkey" PRIMARY KEY ("location_id")
);

-- CreateTable
CREATE TABLE "Geofences" (
    "created_at" TIMESTAMP(6),
    "description" TEXT,
    "location_id" INTEGER,
    "geofence_id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "radius" INTEGER,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "Geofences_pkey" PRIMARY KEY ("geofence_id")
);

-- CreateTable
CREATE TABLE "Hashtags" (
    "created_at" TIMESTAMP(6),
    "hash_text" VARCHAR(255),
    "hashtag_id" SERIAL NOT NULL,
    "tag" VARCHAR(255),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "Hashtags_pkey" PRIMARY KEY ("hashtag_id")
);

-- CreateTable
CREATE TABLE "MenuItemCategories" (
    "category_id" SERIAL NOT NULL,
    "menu_item_id" INTEGER,
    "name" VARCHAR(255),

    CONSTRAINT "MenuItemCategories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "MenuItems" (
    "available_quantity" INTEGER,
    "description" TEXT,
    "hashtags" TEXT,
    "menu_item_id" SERIAL NOT NULL,
    "image_url" VARCHAR(255),
    "ingredients" TEXT,
    "is_active" BOOLEAN DEFAULT true,
    "is_vegetarian" BOOLEAN,
    "category_id" INTEGER,
    "menu_id" INTEGER,
    "name" VARCHAR(255),
    "preparation_time" INTEGER,
    "price" DECIMAL(10,2),
    "share_slug" VARCHAR(255),

    CONSTRAINT "MenuItems_pkey" PRIMARY KEY ("menu_item_id")
);

-- CreateTable
CREATE TABLE "Menus" (
    "created_at" TIMESTAMP(6),
    "description" TEXT,
    "menu_id" SERIAL NOT NULL,
    "is_active" BOOLEAN,
    "name" VARCHAR(255),
    "restaurant_id" INTEGER,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "NotificationSettings" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "setting_id" SERIAL NOT NULL,
    "setting_name" VARCHAR(255),
    "setting_value" BOOLEAN DEFAULT true,
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "NotificationSettings_pkey" PRIMARY KEY ("setting_id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "notification_id" SERIAL NOT NULL,
    "is_read" BOOLEAN DEFAULT false,
    "message" TEXT,
    "user_id" INTEGER,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "customization_options" TEXT,
    "order_item_id" SERIAL NOT NULL,
    "item_description" TEXT,
    "item_image" VARCHAR(255),
    "item_name" VARCHAR(255),
    "menu_item_id" INTEGER,
    "order_id" INTEGER,
    "price" DECIMAL(10,2),
    "quantity" INTEGER,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "coupon_id" INTEGER,
    "delivery_time" TIMESTAMP(6),
    "discount_amount" DECIMAL(10,2),
    "final_amount" DECIMAL(10,2),
    "order_id" SERIAL NOT NULL,
    "is_delivered" BOOLEAN DEFAULT false,
    "is_paid" BOOLEAN DEFAULT false,
    "order_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "order_type" VARCHAR(50),
    "payment_method_id" INTEGER,
    "restaurant_id" INTEGER,
    "scheduled_delivery_time" TIMESTAMP(6),
    "special_instructions" TEXT,
    "status" VARCHAR(50),
    "total_amount" DECIMAL(10,2),
    "delivery_address_id" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "PaymentMethods" (
    "method_id" SERIAL NOT NULL,
    "method_details" TEXT,
    "method_name" VARCHAR(50),

    CONSTRAINT "PaymentMethods_pkey" PRIMARY KEY ("method_id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "payment_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "payment_amount" DECIMAL(10,2),
    "payment_date" TIMESTAMP(6),
    "payment_method_id" INTEGER NOT NULL,
    "payment_status" VARCHAR(50),
    "transaction_id" VARCHAR(100),

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "Reports" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "report_id" SERIAL NOT NULL,
    "report_data" JSON,
    "report_type" VARCHAR(255),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "Reservations" (
    "created_at" TIMESTAMP(6),
    "reservation_id" SERIAL NOT NULL,
    "party_size" INTEGER,
    "reservation_date" TIMESTAMP(6),
    "reservation_time" TIME(6),
    "restaurant_id" INTEGER,
    "status" VARCHAR(50),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Reservations_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "RestaurantDetails" (
    "delivery_charge" DECIMAL,
    "delivery_time" VARCHAR(50),
    "description" TEXT,
    "detail_id" SERIAL NOT NULL,
    "image_url" VARCHAR(255),
    "min_order_value" DECIMAL,
    "rating" DECIMAL(3,2),
    "restaurant_id" INTEGER,
    "review_count" INTEGER,

    CONSTRAINT "RestaurantDetails_pkey" PRIMARY KEY ("detail_id")
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "address" VARCHAR(255),
    "average_cost" DECIMAL(10,2),
    "closing_hours" VARCHAR(255),
    "created_at" TIMESTAMP(6),
    "email" VARCHAR(255),
    "filter_tag" VARCHAR(255),
    "hashtags" TEXT,
    "restaurant_id" SERIAL NOT NULL,
    "is_active" BOOLEAN,
    "name" VARCHAR(255),
    "opening_hours" VARCHAR(255),
    "phone_number" VARCHAR(20),
    "share_slug" VARCHAR(255),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("restaurant_id")
);

-- CreateTable
CREATE TABLE "ReviewRatings" (
    "cleanliness" DECIMAL,
    "food_quality" DECIMAL,
    "rating_id" SERIAL NOT NULL,
    "review_id" INTEGER,
    "service" DECIMAL,
    "value_for_money" DECIMAL,

    CONSTRAINT "ReviewRatings_pkey" PRIMARY KEY ("rating_id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "body" TEXT,
    "created_at" TIMESTAMP(6),
    "review_id" SERIAL NOT NULL,
    "rating" DECIMAL,
    "restaurant_id" INTEGER,
    "title" VARCHAR(255),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "Rewards" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "expiration_date" DATE,
    "reward_id" SERIAL NOT NULL,
    "points" INTEGER DEFAULT 0,
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Rewards_pkey" PRIMARY KEY ("reward_id")
);

-- CreateTable
CREATE TABLE "SubscriptionPlans" (
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "duration_unit" VARCHAR(50) NOT NULL,
    "plan_id" SERIAL NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "name" VARCHAR(100) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "SubscriptionPlans_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "Subscriptions" (
    "auto_renew" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATE,
    "subscription_id" SERIAL NOT NULL,
    "payment_status" VARCHAR(50) NOT NULL,
    "start_date" DATE NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("subscription_id")
);

-- CreateTable
CREATE TABLE "SystemSettings" (
    "created_at" TIMESTAMP(6),
    "description" TEXT,
    "setting_id" SERIAL NOT NULL,
    "setting_key" VARCHAR(255),
    "setting_value" TEXT,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "SystemSettings_pkey" PRIMARY KEY ("setting_id")
);

-- CreateTable
CREATE TABLE "TransactionStatuses" (
    "status_id" SERIAL NOT NULL,
    "status" VARCHAR(50),
    "status_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "transaction_id" INTEGER,

    CONSTRAINT "TransactionStatuses_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "amount" DECIMAL(10,2),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "transaction_id" SERIAL NOT NULL,
    "order_id" INTEGER,
    "status" VARCHAR(50),
    "transaction_type" VARCHAR(50),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "UserAddresses" (
    "address_line_1" VARCHAR(255),
    "address_line_2" VARCHAR(255),
    "city" VARCHAR(255),
    "country" VARCHAR(255),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "address_id" SERIAL NOT NULL,
    "is_primary" BOOLEAN DEFAULT false,
    "pincode" VARCHAR(10),
    "state" VARCHAR(255),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "UserAddresses_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "UserModels" (
    "apple_sso_token" VARCHAR(255),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR(255) NOT NULL,
    "email_password" VARCHAR(255) NOT NULL,
    "facebook_sso_token" VARCHAR(255),
    "google_sso_token" VARCHAR(255),
    "user_id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "phone_number" VARCHAR(20) NOT NULL,
    "twitter_sso_token" VARCHAR(255),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "UserModels_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "wishlist_id" SERIAL NOT NULL,
    "item_id" INTEGER,
    "item_type" VARCHAR(255),
    "updated_at" TIMESTAMP(6),
    "user_id" INTEGER,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("wishlist_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Coupons_code_key" ON "Coupons"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Hashtags_tag_key" ON "Hashtags"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "SystemSettings_setting_key_key" ON "SystemSettings"("setting_key");

-- CreateIndex
CREATE UNIQUE INDEX "UserModels_email_key" ON "UserModels"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserModels_phone_number_key" ON "UserModels"("phone_number");

-- AddForeignKey
ALTER TABLE "AccessLogs" ADD CONSTRAINT "AccessLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CouponRedemptions" ADD CONSTRAINT "CouponRedemptions_coupon_id_fkey" FOREIGN KEY ("coupon_id") REFERENCES "Coupons"("coupon_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CouponRedemptions" ADD CONSTRAINT "CouponRedemptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerPreferences" ADD CONSTRAINT "CustomerPreferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSubscriptions" ADD CONSTRAINT "CustomerSubscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "SubscriptionPlans"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSubscriptions" ADD CONSTRAINT "CustomerSubscriptions_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "Subscriptions"("subscription_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSubscriptions" ADD CONSTRAINT "CustomerSubscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ErrorLogs" ADD CONSTRAINT "ErrorLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteMenuItems" ADD CONSTRAINT "FavoriteMenuItems_favorite_id_fkey" FOREIGN KEY ("favorite_id") REFERENCES "Favorites"("favorite_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteMenuItems" ADD CONSTRAINT "FavoriteMenuItems_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "MenuItems"("menu_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteRestaurants" ADD CONSTRAINT "FavoriteRestaurants_favorite_id_fkey" FOREIGN KEY ("favorite_id") REFERENCES "Favorites"("favorite_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteRestaurants" ADD CONSTRAINT "FavoriteRestaurants_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("restaurant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Geofences" ADD CONSTRAINT "Geofences_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "GeoLocations"("location_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItemCategories" ADD CONSTRAINT "MenuItemCategories_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "MenuItems"("menu_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "MenuItems_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "MenuItemCategories"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "MenuItems_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "Menus"("menu_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menus" ADD CONSTRAINT "Menus_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("restaurant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationSettings" ADD CONSTRAINT "NotificationSettings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_menu_item_id_fkey" FOREIGN KEY ("menu_item_id") REFERENCES "MenuItems"("menu_item_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_coupon_id_fkey" FOREIGN KEY ("coupon_id") REFERENCES "Coupons"("coupon_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "PaymentMethods"("method_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("restaurant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "UserAddresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "PaymentMethods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("restaurant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantDetails" ADD CONSTRAINT "RestaurantDetails_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("restaurant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewRatings" ADD CONSTRAINT "ReviewRatings_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Reviews"("review_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants"("restaurant_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rewards" ADD CONSTRAINT "Rewards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscriptions" ADD CONSTRAINT "Subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "SubscriptionPlans"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscriptions" ADD CONSTRAINT "Subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionStatuses" ADD CONSTRAINT "TransactionStatuses_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "Transactions"("transaction_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddresses" ADD CONSTRAINT "UserAddresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserModels"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
