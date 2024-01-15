import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section flex flex-col-reverse items-center justify-center min-h-[calc(100vh-80px)] gap-8 md:flex-row">
      <div className="flex flex-col gap-6 items-start w-full md:w-1/2">
        <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
          Streamline access to healthcare services
        </h1>
        <p className="text-justify text-md">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings.
        </p>

        <Link href="/appointments">
          <Button>Book an appointment</Button>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
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
