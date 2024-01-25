"use client";

import { HospitalProps } from "@/types/hospital";
import Hospital from "./Hospital";
import { useGetHospitals } from "@/api/hospitals";
import { Skeleton } from "../ui/skeleton";

const HospitalsList = () => {
  const { data, isLoading } = useGetHospitals(null);

  return (
    <section className="section">
      <ul className="py-8 grid grid-cols-hospitals gap-8">
        {isLoading ? (
          Array.from({ length: 12 }).map((_, i) => (
            <Skeleton className="h-[200px] bg-slate-200" key={i} />
          ))
        ) : data && data.data ? (
          data.data.map((hospital: HospitalProps) => (
            <Hospital key={hospital.id} {...hospital} />
          ))
        ) : (
          <p className="section">No Hospitals Found</p>
        )}
      </ul>
    </section>
  );
};

export default HospitalsList;
