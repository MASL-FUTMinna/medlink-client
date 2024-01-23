"use client";
import { useEffect, useState } from "react";
import { Root } from "@/types/bookedAppointments";
import Image from "next/image";
import Loading from "@/app/loading";

const dateFormat = (inputDate) => {
  const readableDate = new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return readableDate;
};

const timeFormat = (inputTime) => {
  const formattedTime = new Date(`2000-01-01T${inputTime}`).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  );
  return formattedTime;
};

export default function Page() {
  const [data, setData] = useState<Root>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAppointments = async () => {
      const userId = localStorage.getItem("userId");
      setLoading(true);
      try {
        const res = await fetch(
          `https://medlink-server-production.up.railway.app/appointments/users/${userId}`,{}
        );
        if (!res.ok) {
          setLoading(false);
          throw new Error("Failed to fetch appointment data");
        }
        const result = await res.json();
        console.log({result})
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, []);
  console.log(data);
  return (
    <main>
      <section className="section py-12 bg-slate-50">
        <p className=" text-black text-4xl font-semibold">Appointments</p>
      </section>
      {
        isLoading ? <Loading /> 
        ? data.length == 0 : (
          <section className="mt-10 grid  md:grid-cols-2 gap-10 section">
            <p>Unable to fetch appointment please try again later</p>
          </section>
        )
        : (
          <section className="mt-10 grid  md:grid-cols-2 gap-10 section">
            {data.map((appointment) => (
              <div key={appointment.id} className="flex items-center flex-col sm:flex-row gap-8 border-b border-gray-200 pb-5">
                <Image
                  src={appointment.practitioner.photoUrl}
                  alt={`Image of Doctor ${appointment.practitioner.first_name}`}
                  width={140}
                  height={200}
                  className="rounded-lg"
                />
                <div className="flex flex-col gap-4">
                  <h4 className="text-black text-[17px] font-normal">
                    Appointment with
                    <span className="text-indigo-800 text-[17px] font-bold">
                      {" "}
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
                  <p className={`w-[88px] block h-[21px] text-center ${appointment.status === "pending" ? "bg-yellow-50 text-yellow-600" : "text-green-500 bg-emerald-50"}  text-xs font-medium px-3 py-0.5 rounded-xl`}>{appointment.status}</p>
                </div>
              </div>
            ))}
          </section>
        )
      }
    </main>
  );
}
