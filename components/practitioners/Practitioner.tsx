"use client";

import Image from "next/image";
import { PractitionerProp } from "@/types/practitioner";
import Link from "next/link";


const Practioner = ({ id, first_name, last_name, hospital_name, specialization, photoUrl }: PractitionerProp) => {

  return (
    <Link href={`/appointments/practitioner/${id}`}
      className="font-head cursor-pointer"
    >
      <Image
        src={photoUrl}
        alt={`Headshot of ${first_name}`}
        width={300}
        height={600}
        className="w-full"
      />
      <h3>Dr. {last_name} {first_name}</h3>
      <div className="flex gap-2">
        <Image
          src="/assets/icons/hospital.svg"
          alt="Hospital building icon"
          width={20}
          height={20}
        />
        <p className="text-[#7A7A7A] text-xs">
          {specialization} at <span className="uppercase">{hospital_name}</span>
        </p>
      </div>
    </Link>
  );
};

export default Practioner;
