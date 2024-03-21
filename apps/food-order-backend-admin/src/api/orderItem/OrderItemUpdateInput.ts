import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { Decimal } from "decimal.js";

export type OrderItemUpdateInput = {
  customizationOptions?: string | null;
  itemDescription?: string | null;
  itemImage?: string | null;
  itemName?: string | null;
  menuItems?: MenuItemWhereUniqueInput | null;
  orders?: OrderWhereUniqueInput | null;
  price?: Decimal | null;
  quantity?: number | null;
};
