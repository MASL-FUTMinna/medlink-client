import { dateFormat, timeFormat } from "@/utils/helpers";
import Image from "next/image";
import CancelAppointment from "./CancelAppointments";

interface AppointmentItemProps {
    appointment: PractitionerAppointments;
}

const AppointmentList = ({ appointment }: AppointmentItemProps) => {
return (
    <div
        className="flex items-center flex-col sm:flex-row gap-8 border-b border-gray-200 pb-5"
    >
        <div className="flex flex-col gap-4">
            <h4 className="text-black text-[17px] font-normal">
                Appointment with
                <span className="text-indigo-800 text-[17px] font-bold">
                    {" "}
                    {appointment.user.last_name} {appointment.user.first_name}
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
                    {appointment.user.email}{" "}
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
            <p
                className={`w-[88px] block h-[21px] text-center ${appointment.status === "pending"
                    ? "bg-yellow-50 text-yellow-600"
                    : "text-green-500 bg-emerald-50"
                    }  text-xs font-medium px-3 py-0.5 rounded-xl`}
            >
                {appointment.status}
            </p>
            <CancelAppointment appointment={appointment}/>
        </div>
    </div>
)
}

export default AppointmentList