import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-16 section flex flex-col gap-8 md:flex-row">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-neutral-900 text-3xl">
          Why Choose Us?
        </h3>
        <p className="font-medium">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
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
              doctor&apos;s appointment system.
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
              doctor&apos;s appointment system.
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
  );
}
