import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FAVORITE_TITLE_FIELD } from "../favorite/FavoriteTitle";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";

export const FavoriteMenuItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FavoriteMenuItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Favorites"
          source="favorite.id"
          reference="Favorite"
        >
          <TextField source={FAVORITE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Menu Items"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
