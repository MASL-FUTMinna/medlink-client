"use client";
import { useGetAppointmentHistory } from "@/api/appointments";
import { PageTitle } from "@/components/custom";
import {
  AppointmentItem,
  AppointmentsSkeleton,
} from "@/components/appointments";

export default function Page() {
  const { data, isLoading } = useGetAppointmentHistory();
  return (
    <main>
      <PageTitle title="Appointments" />
      <section className="mt-10 grid  md:grid-cols-2 gap-10 section">
        {isLoading ? (
          <AppointmentsSkeleton />
        ) : (
          data &&
          data?.data.map((appointment) => (
            <AppointmentItem appointment={appointment} key={appointment.id} />
          ))
        )}
      </section>
    </main>
  );
}
