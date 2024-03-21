import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "status";

export const ReservationTitle = (record: TReservation): string => {
  return record.status?.toString() || String(record.id);
};
