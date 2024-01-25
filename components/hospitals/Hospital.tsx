"use client";

import Image from "next/image";
import { HospitalProps } from "@/types/hospital";
import Link from "next/link";
import { FaHospital } from "react-icons/fa";

const Hospital = ({ id, name, address, city, state }: HospitalProps) => {
  return (
    <Link
      className="font-head cursor-pointer relative"
      href={`/appointments/${id}`}
    >
      <div className="absolute h-full top-0 w-full left-0 hover:bg-secondary/20 rounded-sm transition-all duration-300 ease-in-out "></div>

      <Image
        src={"/assets/images/health.png"}
        alt={`${name} Hospital`}
        width={300}
        height={600}
        className="w-full rounded-sm "
      />

      <div className="p-2 space-y-1">
        <h3 className="capitalize">{name}</h3>
        <div className="flex gap-2 items-start">
          <FaHospital className="text-[#7A7A7A] text-lg" />
          <p className="text-[#7A7A7A] text-xs m-0  capitalize">
            {address}, {city}, <span className="uppercase">{state} State</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Hospital;
