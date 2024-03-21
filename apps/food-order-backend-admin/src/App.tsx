import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AccessLogList } from "./accessLog/AccessLogList";
import { AccessLogCreate } from "./accessLog/AccessLogCreate";
import { AccessLogEdit } from "./accessLog/AccessLogEdit";
import { AccessLogShow } from "./accessLog/AccessLogShow";
import { CouponRedemptionList } from "./couponRedemption/CouponRedemptionList";
import { CouponRedemptionCreate } from "./couponRedemption/CouponRedemptionCreate";
import { CouponRedemptionEdit } from "./couponRedemption/CouponRedemptionEdit";
import { CouponRedemptionShow } from "./couponRedemption/CouponRedemptionShow";
import { CouponList } from "./coupon/CouponList";
import { CouponCreate } from "./coupon/CouponCreate";
import { CouponEdit } from "./coupon/CouponEdit";
import { CouponShow } from "./coupon/CouponShow";
import { CustomerPreferenceList } from "./customerPreference/CustomerPreferenceList";
import { CustomerPreferenceCreate } from "./customerPreference/CustomerPreferenceCreate";
import { CustomerPreferenceEdit } from "./customerPreference/CustomerPreferenceEdit";
import { CustomerPreferenceShow } from "./customerPreference/CustomerPreferenceShow";
import { CustomerSubscriptionList } from "./customerSubscription/CustomerSubscriptionList";
import { CustomerSubscriptionCreate } from "./customerSubscription/CustomerSubscriptionCreate";
import { CustomerSubscriptionEdit } from "./customerSubscription/CustomerSubscriptionEdit";
import { CustomerSubscriptionShow } from "./customerSubscription/CustomerSubscriptionShow";
import { ErrorLogList } from "./errorLog/ErrorLogList";
import { ErrorLogCreate } from "./errorLog/ErrorLogCreate";
import { ErrorLogEdit } from "./errorLog/ErrorLogEdit";
import { ErrorLogShow } from "./errorLog/ErrorLogShow";
import { FavoriteMenuItemList } from "./favoriteMenuItem/FavoriteMenuItemList";
import { FavoriteMenuItemCreate } from "./favoriteMenuItem/FavoriteMenuItemCreate";
import { FavoriteMenuItemEdit } from "./favoriteMenuItem/FavoriteMenuItemEdit";
import { FavoriteMenuItemShow } from "./favoriteMenuItem/FavoriteMenuItemShow";
import { FavoriteRestaurantList } from "./favoriteRestaurant/FavoriteRestaurantList";
import { FavoriteRestaurantCreate } from "./favoriteRestaurant/FavoriteRestaurantCreate";
import { FavoriteRestaurantEdit } from "./favoriteRestaurant/FavoriteRestaurantEdit";
import { FavoriteRestaurantShow } from "./favoriteRestaurant/FavoriteRestaurantShow";
import { FavoriteList } from "./favorite/FavoriteList";
import { FavoriteCreate } from "./favorite/FavoriteCreate";
import { FavoriteEdit } from "./favorite/FavoriteEdit";
import { FavoriteShow } from "./favorite/FavoriteShow";
import { GeoLocationList } from "./geoLocation/GeoLocationList";
import { GeoLocationCreate } from "./geoLocation/GeoLocationCreate";
import { GeoLocationEdit } from "./geoLocation/GeoLocationEdit";
import { GeoLocationShow } from "./geoLocation/GeoLocationShow";
import { GeofenceList } from "./geofence/GeofenceList";
import { GeofenceCreate } from "./geofence/GeofenceCreate";
import { GeofenceEdit } from "./geofence/GeofenceEdit";
import { GeofenceShow } from "./geofence/GeofenceShow";
import { HashtagList } from "./hashtag/HashtagList";
import { HashtagCreate } from "./hashtag/HashtagCreate";
import { HashtagEdit } from "./hashtag/HashtagEdit";
import { HashtagShow } from "./hashtag/HashtagShow";
import { MenuItemCategoryList } from "./menuItemCategory/MenuItemCategoryList";
import { MenuItemCategoryCreate } from "./menuItemCategory/MenuItemCategoryCreate";
import { MenuItemCategoryEdit } from "./menuItemCategory/MenuItemCategoryEdit";
import { MenuItemCategoryShow } from "./menuItemCategory/MenuItemCategoryShow";
import { MenuItemList } from "./menuItem/MenuItemList";
import { MenuItemCreate } from "./menuItem/MenuItemCreate";
import { MenuItemEdit } from "./menuItem/MenuItemEdit";
import { MenuItemShow } from "./menuItem/MenuItemShow";
import { MenuList } from "./menu/MenuList";
import { MenuCreate } from "./menu/MenuCreate";
import { MenuEdit } from "./menu/MenuEdit";
import { MenuShow } from "./menu/MenuShow";
import { NotificationSettingList } from "./notificationSetting/NotificationSettingList";
import { NotificationSettingCreate } from "./notificationSetting/NotificationSettingCreate";
import { NotificationSettingEdit } from "./notificationSetting/NotificationSettingEdit";
import { NotificationSettingShow } from "./notificationSetting/NotificationSettingShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { PaymentMethodList } from "./paymentMethod/PaymentMethodList";
import { PaymentMethodCreate } from "./paymentMethod/PaymentMethodCreate";
import { PaymentMethodEdit } from "./paymentMethod/PaymentMethodEdit";
import { PaymentMethodShow } from "./paymentMethod/PaymentMethodShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { RestaurantDetailList } from "./restaurantDetail/RestaurantDetailList";
import { RestaurantDetailCreate } from "./restaurantDetail/RestaurantDetailCreate";
import { RestaurantDetailEdit } from "./restaurantDetail/RestaurantDetailEdit";
import { RestaurantDetailShow } from "./restaurantDetail/RestaurantDetailShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { ReviewRatingList } from "./reviewRating/ReviewRatingList";
import { ReviewRatingCreate } from "./reviewRating/ReviewRatingCreate";
import { ReviewRatingEdit } from "./reviewRating/ReviewRatingEdit";
import { ReviewRatingShow } from "./reviewRating/ReviewRatingShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { SubscriptionPlanList } from "./subscriptionPlan/SubscriptionPlanList";
import { SubscriptionPlanCreate } from "./subscriptionPlan/SubscriptionPlanCreate";
import { SubscriptionPlanEdit } from "./subscriptionPlan/SubscriptionPlanEdit";
import { SubscriptionPlanShow } from "./subscriptionPlan/SubscriptionPlanShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { SystemSettingList } from "./systemSetting/SystemSettingList";
import { SystemSettingCreate } from "./systemSetting/SystemSettingCreate";
import { SystemSettingEdit } from "./systemSetting/SystemSettingEdit";
import { SystemSettingShow } from "./systemSetting/SystemSettingShow";
import { TransactionStatusList } from "./transactionStatus/TransactionStatusList";
import { TransactionStatusCreate } from "./transactionStatus/TransactionStatusCreate";
import { TransactionStatusEdit } from "./transactionStatus/TransactionStatusEdit";
import { TransactionStatusShow } from "./transactionStatus/TransactionStatusShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { UserAddressList } from "./userAddress/UserAddressList";
import { UserAddressCreate } from "./userAddress/UserAddressCreate";
import { UserAddressEdit } from "./userAddress/UserAddressEdit";
import { UserAddressShow } from "./userAddress/UserAddressShow";
import { UserModelList } from "./userModel/UserModelList";
import { UserModelCreate } from "./userModel/UserModelCreate";
import { UserModelEdit } from "./userModel/UserModelEdit";
import { UserModelShow } from "./userModel/UserModelShow";
import { WishlistList } from "./wishlist/WishlistList";
import { WishlistCreate } from "./wishlist/WishlistCreate";
import { WishlistEdit } from "./wishlist/WishlistEdit";
import { WishlistShow } from "./wishlist/WishlistShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"food_order_backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AccessLog"
          list={AccessLogList}
          edit={AccessLogEdit}
          create={AccessLogCreate}
          show={AccessLogShow}
        />
        <Resource
          name="CouponRedemption"
          list={CouponRedemptionList}
          edit={CouponRedemptionEdit}
          create={CouponRedemptionCreate}
          show={CouponRedemptionShow}
        />
        <Resource
          name="Coupon"
          list={CouponList}
          edit={CouponEdit}
          create={CouponCreate}
          show={CouponShow}
        />
        <Resource
          name="CustomerPreference"
          list={CustomerPreferenceList}
          edit={CustomerPreferenceEdit}
          create={CustomerPreferenceCreate}
          show={CustomerPreferenceShow}
        />
        <Resource
          name="CustomerSubscription"
          list={CustomerSubscriptionList}
          edit={CustomerSubscriptionEdit}
          create={CustomerSubscriptionCreate}
          show={CustomerSubscriptionShow}
        />
        <Resource
          name="ErrorLog"
          list={ErrorLogList}
          edit={ErrorLogEdit}
          create={ErrorLogCreate}
          show={ErrorLogShow}
        />
        <Resource
          name="FavoriteMenuItem"
          list={FavoriteMenuItemList}
          edit={FavoriteMenuItemEdit}
          create={FavoriteMenuItemCreate}
          show={FavoriteMenuItemShow}
        />
        <Resource
          name="FavoriteRestaurant"
          list={FavoriteRestaurantList}
          edit={FavoriteRestaurantEdit}
          create={FavoriteRestaurantCreate}
          show={FavoriteRestaurantShow}
        />
        <Resource
          name="Favorite"
          list={FavoriteList}
          edit={FavoriteEdit}
          create={FavoriteCreate}
          show={FavoriteShow}
        />
        <Resource
          name="GeoLocation"
          list={GeoLocationList}
          edit={GeoLocationEdit}
          create={GeoLocationCreate}
          show={GeoLocationShow}
        />
        <Resource
          name="Geofence"
          list={GeofenceList}
          edit={GeofenceEdit}
          create={GeofenceCreate}
          show={GeofenceShow}
        />
        <Resource
          name="Hashtag"
          list={HashtagList}
          edit={HashtagEdit}
          create={HashtagCreate}
          show={HashtagShow}
        />
        <Resource
          name="MenuItemCategory"
          list={MenuItemCategoryList}
          edit={MenuItemCategoryEdit}
          create={MenuItemCategoryCreate}
          show={MenuItemCategoryShow}
        />
        <Resource
          name="MenuItem"
          list={MenuItemList}
          edit={MenuItemEdit}
          create={MenuItemCreate}
          show={MenuItemShow}
        />
        <Resource
          name="Menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          show={MenuShow}
        />
        <Resource
          name="NotificationSetting"
          list={NotificationSettingList}
          edit={NotificationSettingEdit}
          create={NotificationSettingCreate}
          show={NotificationSettingShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="PaymentMethod"
          list={PaymentMethodList}
          edit={PaymentMethodEdit}
          create={PaymentMethodCreate}
          show={PaymentMethodShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="RestaurantDetail"
          list={RestaurantDetailList}
          edit={RestaurantDetailEdit}
          create={RestaurantDetailCreate}
          show={RestaurantDetailShow}
        />
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="ReviewRating"
          list={ReviewRatingList}
          edit={ReviewRatingEdit}
          create={ReviewRatingCreate}
          show={ReviewRatingShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="SubscriptionPlan"
          list={SubscriptionPlanList}
          edit={SubscriptionPlanEdit}
          create={SubscriptionPlanCreate}
          show={SubscriptionPlanShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="SystemSetting"
          list={SystemSettingList}
          edit={SystemSettingEdit}
          create={SystemSettingCreate}
          show={SystemSettingShow}
        />
        <Resource
          name="TransactionStatus"
          list={TransactionStatusList}
          edit={TransactionStatusEdit}
          create={TransactionStatusCreate}
          show={TransactionStatusShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="UserAddress"
          list={UserAddressList}
          edit={UserAddressEdit}
          create={UserAddressCreate}
          show={UserAddressShow}
        />
        <Resource
          name="UserModel"
          list={UserModelList}
          edit={UserModelEdit}
          create={UserModelCreate}
          show={UserModelShow}
        />
        <Resource
          name="Wishlist"
          list={WishlistList}
          edit={WishlistEdit}
          create={WishlistCreate}
          show={WishlistShow}
        />
      </Admin>
    </div>
  );
};

export default App;
