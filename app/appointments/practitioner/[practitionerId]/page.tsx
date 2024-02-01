"use client";

import SelectAppointment from "@/components/practitioners/SelectAppointment";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetPractionerById } from "@/api/practitioner";
import { PractitionerDetailsSkeleton } from "@/components/practitioners";

export default function Page() {
  const { practitionerId } = useParams();

  const { data, isLoading } = useGetPractionerById(practitionerId as string);

  return (
    <main>
      <section className="section bg-accent-20">
        <h2 className="text-2xl">Doctor Profile</h2>
      </section>

      {isLoading ? (
        <PractitionerDetailsSkeleton />
      ) : data ? (
        <section className="section grid lg:grid-cols-11 gap-12 pb-14 ">
          <div className="bg-slate-300 h-[60vh] lg:h-[70vh] max-w-[500px] lg:max-w-full mx-auto w-full col-span-11 lg:col-span-5">
            <Image
              src={data.photoUrl}
              alt={`Image of Doctor ${data.first_name}`}
              width={400}
              height={800}
              className="w-full h-full mx-auto object-cover "
            />
          </div>

          <section className=" col-span-11 lg:col-span-6 space-y-8 ">
            <section className="flex flex-col gap-2">
              <h2 className="text-2xl">
                Dr. {data.last_name} {data.first_name}
              </h2>
              <div className="flex gap-2 items-center leading-none">
                <Image
                  src="/assets/icons/hospital.svg"
                  alt="Hospital building icon"
                  width={20}
                  height={20}
                />
                <p className="text-[#7A7A7A] text-xs">
                  {data.specialization} specialist
                </p>
              </div>
              <p>
                Welcome to the profile of Dr. {data.last_name} {data.first_name}
                , a {data.specialization} specialist. Explore their bio, learn
                about their expertise, and schedule an appointment to receive
                personalized medical care.
              </p>
              <hr className="mt-8" />
            </section>
            <section className="flex flex-col gap-2">
              <h2>Bio</h2>
              <p>{data.bio}</p>
            </section>
            <section className="py-4 px-4 mt-8 flex flex-col gap-4 border border-gray-200">
              <SelectAppointment id={practitionerId as string} />
            </section>
          </section>
        </section>
      ) : (
        <p className="section">Practioner Not Found</p>
      )}
    </main>
  );
}
