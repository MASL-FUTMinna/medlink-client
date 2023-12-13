import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="section flex flex-col-reverse items-center justify-center min-h-[calc(100vh-80px)] gap-8 md:flex-row">
        <div className="flex flex-col gap-6 items-start w-full md:w-1/2">
          <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
            Streamline access to healthcare services
          </h1>
          <p className="text-justify text-md">
            Effortlessly manage your appointments with our intuitive doctor's
            appointment system. Say goodbye to scheduling hassles and hello to
            seamless, convenient bookings.
          </p>

          <Button>Book an appointment</Button>
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
      <section className="py-16 section flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-neutral-900 text-3xl">
            Why Choose Us?
          </h3>
          <p className="font-medium">
            Effortlessly manage your appointments with our intuitive doctor's
            appointment system. Say goodbye to scheduling hassles and hello to
            seamless, convenient bookings.
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-4 text-center font-medium">
            <li className="flex flex-col gap-4 bg-[#FAFAFC] p-2">
              <div className="rounded-full bg-accent-50 p-4 w-fit mx-auto">
                <Image
                  src="/assets/icons/note.svg"
                  alt="note icon"
                  width={40}
                  height={40}
                />
              </div>

              <h4 className=" text-neutral-900 text-lg">Health Records</h4>

              <p>
                Effortlessly manage your appointments with our intuitive
                doctor's appointment system.
              </p>
            </li>
            <li className="flex flex-col gap-4 bg-[#FAFAFC] p-2">
              <div className="rounded-full bg-accent-50 p-4 w-fit mx-auto">
                <Image
                  src="/assets/icons/safe.svg"
                  alt="Safe icon"
                  width={40}
                  height={40}
                />
              </div>

              <h4 className=" text-neutral-900 text-lg">Unique ID</h4>

              <p>
                Say goodbye to scheduling hassles and hello to seamless,
                convenient bookings.
              </p>
            </li>
            <li className="flex flex-col gap-4 bg-[#FAFAFC] p-2">
              <div className="rounded-full bg-accent-50 p-4 w-fit mx-auto">
                <Image
                  src="/assets/icons/shield.svg"
                  alt="Shield icon"
                  width={40}
                  height={40}
                />
              </div>

              <h4 className=" text-neutral-900 text-lg">Easy Access</h4>

              <p>
                Effortlessly manage your appointments with our intuitive
                doctor's appointment system.
              </p>
            </li>
            <li className="flex flex-col gap-4 bg-[#FAFAFC] p-2">
              <div className="rounded-full bg-accent-50 p-4 w-fit mx-auto">
                <Image
                  src="/assets/icons/timer.svg"
                  alt="note icon"
                  width={40}
                  height={40}
                />
              </div>

              <h4 className=" text-neutral-900 text-lg">Quick Response</h4>

              <p>
                Say goodbye to scheduling hassles and hello to seamless,
                convenient bookings.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
