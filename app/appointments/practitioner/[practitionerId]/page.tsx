import SelectAppointment from "@/components/practitioners/SelectAppointment";
import Image from "next/image";
import { cookies } from 'next/headers'


async function getData(id: string) {
  try {
    const res = await fetch(
      `https://medlink-server-production.up.railway.app/practitioners/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hospital data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

async function getAvailableSchedule(id: string) {
  try {
    const res = await fetch(
      `https://medlink-server-production.up.railway.app/schedules/${id}?timeZone=Africa/Lagos`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch hospital data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({
  params,
}: {
  params: { practitionerId: string };
}) {
  const data = await getData(params.practitionerId);
  const scheduleData = await getAvailableSchedule(params.practitionerId);

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!data) {
    return <p className="section">Practioner Not Found</p>;
  }

  return (
    <main>
      <section className="section bg-accent-20">
        <h2 className="text-2xl">Doctor Profile</h2>
      </section>

      <section className="section flex flex-col gap-8 md:flex-row">
        <Image
          src={data.photoUrl}
          alt={`Image of Doctor ${data.first_name}`}
          width={400}
          height={800}
          className="w-fit h-fit mx-auto md:w-full"
        />

        <section>
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl">
              Dr. {data.last_name} {data.first_name}
            </h2>
            <div className="flex gap-2 items-center leading-none">
              <Image
                src="/assets/icons/hospital.svg"
                alt="Hospital building icon"
                width={20}
                height={20}
              />
              <p className="text-[#7A7A7A] text-xs">
                {data.specialization} specialist
              </p>
            </div>
            <p>
              Welcome to the profile of Dr. {data.last_name} {data.first_name}, a {data.specialization} specialist. Explore their bio, learn about their expertise, and schedule an appointment to receive personalized medical care.
            </p>
            <hr className="mt-8" />
          </section>
          <section className="flex flex-col gap-2">
            <h2>Bio</h2>
            <p>{data.bio}</p>
          </section>
          <section className="py-4 px-4 mt-8 flex flex-col gap-4 border border-gray-200">
           <SelectAppointment scheduleData={scheduleData} token={token} id={params.practitionerId}/>
          </section>
        </section>
      </section>
    </main>
  );
}
