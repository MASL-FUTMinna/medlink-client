"use client";

import { useGetHospitalById } from "@/api/hospitals";
import PractitionersList from "@/components/practitioners/PractitionersList";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { hospitalId } = useParams();
  const { data, isLoading } = useGetHospitalById(hospitalId as string);

  return (
    <main>
      <section className="bg-accent-50 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-fit md:flex-row">
        <div className="px-6 flex flex-col gap-4 md:px-16">
          <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
            Find the right health practitioner for you
          </h1>
          <p className="font-medium">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
          </p>
        </div>
        <Image
          src="/assets/images/search-hero.png"
          alt="Hero section image a doctor's coat with a stetoscope on it"
          width={600}
          height={600}
          className="hidden w-full md:block"
        />
      </section>
      <section className="section py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {isLoading ? (
            <Skeleton />
          ) : (
            data && (
              <h3 className="text-zinc-900 text-[40px] font-semibold">
                Practioners in {data.name}
              </h3>
            )
          )}
        </div>
        <PractitionersList isLoading={isLoading} hospital={data} />
      </section>
    </main>
  );
}
