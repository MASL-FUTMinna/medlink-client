"use client";

import Image from "next/image";
import { HospitalProps } from "@/types/hospital";
import Link from "next/link";

const Hospital = ({ id, name, address, city, state }: HospitalProps) => {
  return (
    <Link
      className="font-head cursor-pointer"
      href={`/appointments/${id}`}
    >
      <Image
        src={"/assets/images/Health.png"}
        alt={`${name} Hospital`}
        width={300}
        height={600}
        className="w-full"
      />
      <h3>{name} Hospital</h3>
      <div className="flex gap-2 items-center">
        <Image
          src="/assets/icons/hospital.svg"
          alt="Hospital building icon"
          width={20}
          height={20}
        />
        <p className="text-[#7A7A7A] text-xs">
          {address}, {city}, <span className="uppercase">{state} State</span>
        </p>
      </div>
    </Link>
  );
};

export default Hospital;
