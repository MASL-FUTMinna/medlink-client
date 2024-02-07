import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";
import { SearchHospitals } from "./SearchHospitals";

export default function HospitalBanner() {
  return (
    <section className="bg-accent-50 flex lg:grid lg:grid-cols-2 flex-1 flex-col items-center justify-center min-h-[calc(100vh-80px)] lg:min-h-[60vh] md:flex-row">
      <div className="px-6 flex flex-col gap-4 md:px-16">
        <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
          Find the right health practitioner for you
        </h1>
        <p className="font-medium">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings.
        </p>
        <form>
          <div className="flex gap-2">
            <SearchHospitals />
            <Button type="submit" className=" w-[130px]">
              Search
            </Button>
          </div>
        </form>
      </div>

      <img
        src="/assets/images/search-hero.png"
        alt="Hero section image a doctor's coat with a stetoscope on it"
        className="hidden h-full object-cover  lg:block"
      />
    </section>
  );
}
