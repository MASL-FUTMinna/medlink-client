import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function BookAppointment() {
  return (
    <section className="section py-16 flex flex-col-reverse gap-4 items-center lg:gap-24 md:flex-row">
      <Image
        src="/assets/images/appointment.png"
        alt="medical team"
        width={400}
        height={400}
        className="w-full"
      />
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-semibold text-3xl">
          Book an appointment online today
        </h3>
        <p className="font-medium text-justify">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings
        </p>
        <p className="font-medium md:mb-4 text-justify">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings
        </p>

        <Link href="/appointments">
          <Button>
            Check availability
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="phone icon"
              width="20"
              height="20"
            />
          </Button>
        </Link>
      </div>
    </section>
  );
}
