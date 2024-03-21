import { MenuItem } from "../menuItem/MenuItem";
import { Order } from "../order/Order";
import { Decimal } from "decimal.js";

export type OrderItem = {
  customizationOptions: string | null;
  id: number;
  itemDescription: string | null;
  itemImage: string | null;
  itemName: string | null;
  menuItems?: MenuItem | null;
  orders?: Order | null;
  price: Decimal | null;
  quantity: number | null;
};
