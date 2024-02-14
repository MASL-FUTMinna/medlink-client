"use client";
import { useGetPractitionerAppointments } from "@/api/practitioner";
import { PageTitle } from "@/components/custom";
import {
  AppointmentsSkeleton,
} from "@/components/appointments";
import AppointmentList from "./AppointmentList";

export default function Page() {
  const { data, isLoading } = useGetPractitionerAppointments();

  return (
    <main>
      <PageTitle title="Appointments" />
      <section className="mt-10 grid  md:grid-cols-2 gap-10 section">
        {isLoading ? (
          <AppointmentsSkeleton />
        ) : (
          data?.data.length <= 0 ? (
            <p className="text-center text-neutral-500 text-sm font-normal">
              No appointments found
            </p>
          ) : (
            data &&
            data?.data.map((appointment) => (
              <AppointmentList  key={appointment.id} appointment={appointment} />
            ))
          )
        )
        }
      </section>
    </main>

  );
}
