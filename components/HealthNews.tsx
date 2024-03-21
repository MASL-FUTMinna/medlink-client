import Image from "next/image";
import Link from "next/link";

export default function HealthNews() {
  return (
    <section className="py-16 section font-medium">
      <article className="py-8 flex flex-col gap-4">
        <h3 className="text-3xl font-semibold">Health News</h3>
        <p className="max-w-lg">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings.
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
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
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
  );
}
