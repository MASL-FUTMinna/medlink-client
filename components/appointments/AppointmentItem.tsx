import { timezoneFromat } from "@/utils/helpers";
import { GoInfo } from "react-icons/go";
import Image from "next/image";
import React from "react";
import ResheculeAppointmentButton from "./ResheculeAppointmentButton";
import CancelAppointment from "./CancelAppointment";

interface AppointmentItemProps {
  appointment: UserAppointment;
}

export default function AppointmentItem({ appointment }: AppointmentItemProps) {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-6 border-b border-gray-200 pb-5">
      <Image
        src={appointment.practitioner.photoUrl}
        alt={`Image of Doctor ${appointment.practitioner.first_name}`}
        width={140}
        height={200}
        className="rounded-lg w-full md:w-[140px] md:h-[200px] object-cover h-[400px]"
      />
      <div className="flex w-full flex-col gap-4 md:gap-2">
        <h4 className="text-black font-normal">
          Appointment with{" "}
          <span className="text-indigo-800  font-bold">
            Dr. {appointment.practitioner.last_name}{" "}
            {appointment.practitioner.first_name}
          </span>
        </h4>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/hospital.svg"
            alt="Hospital building icon"
            width={20}
            height={20}
          />
          <p className="text-center text-neutral-500 text-sm font-normal">
            {appointment.practitioner.specialization}{" "}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
            <Image
              src="/assets/icons/symbols_calendar.svg"
              alt="calendar"
              width={15}
              height={15}
            />
            {timezoneFromat(appointment.date, appointment.time).clockDate}
          </div>
          <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
            <Image
              src="/assets/icons/access-time.svg"
              alt="time"
              width={15}
              height={15}
            />
            {timezoneFromat(appointment.date, appointment.time).clockTime}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p
            className={`w-[88px] block h-[21px] text-center capitalize text-xs font-medium px-3 py-0.5 rounded-xl ${
              appointment.status === "pending"
                ? "bg-yellow-100 text-yellow-600"
                : appointment.status === "cancelled"
                ? "text-red-500 bg-red-50"
                : "text-green-500 bg-emerald-50"
            }  `}
          >
            {appointment.status}
          </p>

          <span className="text-gray-500 text-sm flex items-center gap-1 cursor-pointer">
            Details
            <GoInfo />
          </span>
        </div>

        <div className="flex gap-2 items-center">
          {appointment.status === "pending" && (
            // <Button
            //   variant="error"
            //   size="sm"
            //   className="text-red-500 text-sm w-full md:w-fit "
            //   onClick={onOpen}
            // >
            //   <IoMdCloseCircleOutline className="text-base -mr-1" />
            //   Cancel
            // </Button>
            <CancelAppointment appointment={appointment} />
          )}

          {appointment.status !== "completed" && (
            <ResheculeAppointmentButton appointment={appointment} />
          )}
        </div>
      </div>
    </div>
  );
}
