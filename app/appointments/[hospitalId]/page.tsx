import PractitionersList from "@/components/practitioners/PractitionersList";
import Image from "next/image";

async function getData(id: string) {
  try {
    const res = await fetch(
      `https://medlink-server-production.up.railway.app/hospitals/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hospital data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }: { params: { hospitalId: string } }) {
  const data = await getData(params.hospitalId);

  if (!data) {
    return <p className="section">Practioner Not Found</p>;
  }
  
  return (
    <main>
      <section className="bg-accent-50 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-fit md:flex-row">
        <div className="px-6 flex flex-col gap-4 md:px-16">
          <h1 className="text-accent-900 font-semibold text-4xl lg:text-5xl">
            Find the right health practitioner for you
          </h1>
          <p className="font-medium">
            Effortlessly manage your appointments with our intuitive
            doctor&apos;s appointment system. Say goodbye to scheduling hassles
            and hello to seamless, convenient bookings.
          </p>
        </div>
        <Image
          src="/assets/images/search-hero.png"
          alt="Hero section image a doctor's coat with a stetoscope on it"
          width={600}
          height={600}
          className="hidden w-full md:block"
        />
      </section>
      <section className="section py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h3 className="text-zinc-900 text-[40px] font-semibold">
            Practioners in {data.name}
          </h3>
          <ul className="flex gap-6 font-medium text-[#667185]">
            <li className="flex gap-1">
              <Image
                src="/assets/icons/filter.svg"
                width={20}
                height={20}
                alt="Filter icon"
              />
              Filter
            </li>
            <li className="flex gap-1">
              <Image
                src="/assets/icons/location.svg"
                width={20}
                height={20}
                alt="Location icon"
              />
              Minna
            </li>
            <li className="flex">
              <Image
                src="/assets/icons/up-down.svg"
                width={20}
                height={20}
                alt="Selection icon"
              />
              opticians
            </li>
          </ul>
        </div>
        <PractitionersList data={data} />
      </section>
    </main>
  );
}
