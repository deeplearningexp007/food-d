import { MenuItem } from "../menuItem/MenuItem";
import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  createdAt: Date | null;
  description: string | null;
  id: number;
  isActive: boolean | null;
  menuItems?: Array<MenuItem>;
  name: string | null;
  restaurants?: Restaurant | null;
  updatedAt: Date | null;
};
