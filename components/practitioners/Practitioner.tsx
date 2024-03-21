"use client";

import Image from "next/image";
import Link from "next/link";

interface PractitionerProps {
  practitioner: PractitionerType;
  appointmentId: string | null;
}

const Practioner = ({ practitioner, appointmentId }: PractitionerProps) => {
  const { id, first_name, last_name, hospital_name, specialization, photoUrl } =
    practitioner;

  return (
    <Link
      href={
        appointmentId
          ? `/appointments/practitioner/${id}?appointmentId=${appointmentId}`
          : `/appointments/practitioner/${id}`
      }
      className="font-head cursor-pointer relative pb-2"
    >
      <div className="absolute h-full top-0 w-full left-0 hover:bg-secondary/20 rounded-sm transition-all duration-300 ease-in-out "></div>
      <div className="h-[400px] bg-slate-300">
        <Image
          src={photoUrl}
          alt={`Headshot of ${first_name}`}
          width={300}
          height={600}
          className="w-full h-full object-cover mb-3"
        />
      </div>
      <div className="p-1">
        <h3>
          Dr. {last_name} {first_name}
        </h3>
        <div className="flex gap-2 items-start ">
          <Image
            src="/assets/icons/hospital.svg"
            alt="Hospital building icon"
            width={20}
            height={20}
          />
          <div>
            <p className="text-[#7A7A7A] text-xs font-light">
              {specialization}
            </p>
            <p className="text-[#7A7A7A] text-xs font-light capitalize">
              {hospital_name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Practioner;
