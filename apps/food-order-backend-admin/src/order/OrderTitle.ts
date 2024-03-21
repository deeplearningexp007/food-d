import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderType";

export const OrderTitle = (record: TOrder): string => {
  return record.orderType?.toString() || String(record.id);
};
