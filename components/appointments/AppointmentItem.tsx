import { dateFormat, timeFormat } from "@/utils/helpers";
import { GoInfo } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";

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
        height={500}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-2">
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
            {dateFormat(appointment.date)}
          </div>
          <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
            <Image
              src="/assets/icons/access-time.svg"
              alt="time"
              width={15}
              height={15}
            />
            {timeFormat(appointment.time)}
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
            <Button variant="error" size="sm" className="text-red-500 text-sm ">
              <IoMdCloseCircleOutline className="text-base -mr-1" />
              Cancel
            </Button>
          )}

          {appointment.status !== "completed" && (
            <Button size={"sm"} className="w-[124px]">
              Reschedule
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
