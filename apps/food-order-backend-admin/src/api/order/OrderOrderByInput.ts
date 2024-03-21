import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  coupon_id?: SortOrder;
  deliveryTime?: SortOrder;
  discountAmount?: SortOrder;
  finalAmount?: SortOrder;
  id?: SortOrder;
  isDelivered?: SortOrder;
  isPaid?: SortOrder;
  orderDate?: SortOrder;
  orderType?: SortOrder;
  payment_method_id?: SortOrder;
  restaurant_id?: SortOrder;
  scheduledDeliveryTime?: SortOrder;
  specialInstructions?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  delivery_address_id?: SortOrder;
  user_id?: SortOrder;
};
