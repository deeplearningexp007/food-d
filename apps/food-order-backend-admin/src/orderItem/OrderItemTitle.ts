import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "itemName";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.itemName?.toString() || String(record.id);
};
