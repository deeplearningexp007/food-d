import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MENUITEM_TITLE_FIELD } from "../menuItem/MenuItemTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrderItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Customization Options"
          source="customizationOptions"
        />
        <TextField label="ID" source="id" />
        <TextField label="Item Description" source="itemDescription" />
        <TextField label="Item Image" source="itemImage" />
        <TextField label="Item Name" source="itemName" />
        <ReferenceField
          label="Menu Items"
          source="menuitem.id"
          reference="MenuItem"
        >
          <TextField source={MENUITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Quantity" source="quantity" />
      </SimpleShowLayout>
    </Show>
  );
};
