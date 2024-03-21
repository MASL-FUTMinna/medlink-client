import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section w-full grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-80px)] gap-8 md:flex-row">
      <div className="min-h-[calc(100vh-80px)] items-center flex ">
        <div className="grid lg:max-w-[480px] gap-6 items-start w-full ">
          <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
            Streamline access to healthcare services
          </h1>
          <p className="text-justify text-md">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
          </p>

          <Link className="mt-8" href="/appointments">
            <Button className="w-[244px]">Book an appointment</Button>
          </Link>
        </div>
      </div>
      <div className=" flex-1">
        <Image
          src="/assets/images/hero.png"
          alt="A stetoscope"
          width={400}
          height={400}
          className="hidden w-full max-w-[30rem] mx-auto md:block"
        />
      </div>
    </section>
  );
}
