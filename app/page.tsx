import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Button from "@/components/ui/Button";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="section flex flex-col-reverse items-center justify-center min-h-[calc(100vh-80px)] gap-8 md:flex-row">
        <div className="flex flex-col gap-6 items-start w-full md:w-1/2">
          <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
            Streamline access to healthcare services
          </h1>
          <p className="text-justify text-md">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
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
      <Partners />
      <section className="py-16 section flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-neutral-900 text-3xl">
            Why Choose Us?
          </h3>
          <p className="font-medium">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
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
      <section className="section py-16 flex flex-col gap-4 items-center lg:gap-24 md:flex-row">
        <Image
          src="/assets/images/medical-team.png"
          alt="medical team"
          width={400}
          height={400}
          className="w-full md:w-1/2"
        />
        <div className="flex flex-col gap-4 items-start">
          <h3 className="font-semibold text-3xl">
            Our Medical Team works effortlessly
          </h3>

          <p className="font-medium">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings
          </p>
          <p className="font-medium">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings
          </p>

          <Button
            leftIcon={
              <Image
                src="/assets/icons/phone.svg"
                alt="phone icon"
                width="20"
                height="20"
              />
            }
          >
            Contact us
          </Button>
        </div>
      </section>
      <section className="py-16 section font-medium">
        <article className="py-8 flex flex-col gap-4">
          <h3 className="text-3xl font-semibold">Health News</h3>

          <p className="max-w-lg">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
          </p>
        </article>
        <section className="flex flex-col md:flex-row gap-8">
          <article className="flex flex-col gap-4">
            <Image
              src="/assets/images/health.png"
              alt="Image of an hospital bed"
              width={200}
              height={350}
              className="w-full"
            />

            <h4 className="mt-4">Health News</h4>
            <p>
              Effortlessly manage your appointments with our intuitive
              doctor&apos;s appointment system. Say goodbye to scheduling
              hassles and hello to seamless, convenient bookings.
            </p>
            <Link href="/" className="text-accent-800 underline">
              Read more
            </Link>
          </article>
          <div className="grid grid-cols-2">
            <article className="flex flex-col gap-2">
              <Image
                src="/assets/images/health-news.png"
                alt="Health news"
                width={200}
                height={150}
                className="mb-4"
              />
              <h4>Health News</h4>
              <p>
                Effortlessly manage your appointments with our intuitive
                doctor&apos;s appointment system.
              </p>
              <Link href="/" className="text-accent-800 underline">
                Read more
              </Link>
            </article>
            <article className="flex flex-col gap-2">
              <Image
                src="/assets/images/health-news.png"
                alt="Health news"
                width={200}
                height={150}
                className="mb-4"
              />
              <h4>Health News</h4>
              <p>
                Effortlessly manage your appointments with our intuitive
                doctor&apos;s appointment system.
              </p>
              <Link href="/" className="text-accent-800 underline">
                Read more
              </Link>
            </article>
            <article className="flex flex-col gap-2">
              <Image
                src="/assets/images/health-news.png"
                alt="Health news"
                width={200}
                height={150}
                className="mb-4"
              />
              <h4>Health News</h4>
              <p>
                Effortlessly manage your appointments with our intuitive
                doctor&apos;s appointment system.
              </p>
              <Link href="/" className="text-accent-800 underline">
                Read more
              </Link>
            </article>
            <article className="flex flex-col gap-2">
              <Image
                src="/assets/images/health-news.png"
                alt="Health news"
                width={200}
                height={150}
                className="mb-4"
              />
              <h4>Health News</h4>
              <p>
                Effortlessly manage your appointments with our intuitive
                doctor&apos;s appointment system.
              </p>
              <Link href="/" className="text-accent-800 underline">
                Read more
              </Link>
            </article>
          </div>
        </section>
      </section>
      <ContactForm />
      <FAQ />
    </main>
  );
}
