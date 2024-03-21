"use client";

import React, { PropsWithChildren, useContext, useState } from "react";

interface BookingContextType {
  appointmentObj: AppointmentObj;
  setAppointment: (arg: AppointmentObj) => void;
}

const defaultBooking: BookingContextType = {
  appointmentObj: { date: "", time: "" },
  setAppointment: (arg: AppointmentObj) => {},
};

const BookingContext = React.createContext<BookingContextType>(defaultBooking);

export const useBookingContext = () => useContext(BookingContext);

interface BookAppointmentProviderProps extends PropsWithChildren {}

export default function BookAppointmentProvider({
  children,
}: BookAppointmentProviderProps) {
  const [appointmentObj, setAppointmentObj] = useState<AppointmentObj>(
    defaultBooking.appointmentObj
  );
  return (
    <BookingContext.Provider
      value={{ appointmentObj, setAppointment: setAppointmentObj }}
    >
      {children}
    </BookingContext.Provider>
  );
}
