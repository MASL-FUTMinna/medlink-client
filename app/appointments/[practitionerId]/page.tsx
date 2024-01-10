import Button from "@/components/ui/Button";
import { PRACTITIONERS } from "@/constants/practitioner";
import Image from "next/image";

export default function Page({
  params,
}: {
  params: { practitionerId: string };
}) {
  const practitioner = PRACTITIONERS.find(
    (practitioner) => practitioner.id === params.practitionerId
  );

  if (!practitioner) {
    return <p className="section">Practioner Not Found</p>;
  }

  return (
    <main>
      <section className="section bg-accent-20">
        <h2 className="text-2xl">Doctor Profile</h2>
      </section>

      <section className="section flex flex-col gap-8 md:flex-row">
        <Image
          src={practitioner.img}
          alt={`Image of Doctor ${practitioner.name}`}
          width={400}
          height={800}
          className="w-fit h-fit mx-auto md:w-full"
        />

        <section>
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl">Dr. {practitioner.name}</h2>
            <div className="flex gap-2">
              <Image
                src="/assets/icons/hospital.svg"
                alt="Hospital building icon"
                width={20}
                height={20}
              />
              <p className="text-[#7A7A7A] text-xs">
                {practitioner.profession} at{" "}
                <span className="uppercase">{practitioner.hospital}</span>
              </p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              adipisci architecto assumenda laborum iste fugiat. Temporibus
              repellendus soluta, recusandae ex obcaecati voluptates, a nihil
              quae dolorum deleniti unde? Facilis, quia.
            </p>
            <hr className="mt-8" />
          </section>
          <section className="flex flex-col gap-2">
            <h2>Experience</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis distinctio ipsa, et quo, corrupti unde maxime
              necessitatibus ut, possimus laudantium dolores quod provident.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis distinctio ipsa, et quo, corrupti unde maxime
              necessitatibus ut, possimus laudantium dolores quod provident.
              Soluta iure veritatis quaerat pariatur optio. Enim!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis distinctio ipsa, et quo, corrupti unde maxime
              necessitatibus ut, possimus laudantium dolores quod provident.
              Soluta iure veritatis quaerat pariatur optio. Enim!
            </p>
          </section>
          <section className="py-4 px-4 mt-8 flex flex-col gap-4 border border-gray-200">
            <h3>Select Date</h3>

            <input type="date" name="date" id="date" className="py-2" />
          </section>
          <section className="flex flex-col gap-4 py-8">
            <h3>Available Time</h3>

            <div className="flex gap-8">
              <div className="py-3 px-6 border border-gray-100 rounded-md">
                <h3>10:00 am</h3>
              </div>
              <div className="py-2 px-4 border border-gray-100 rounded-md">
                <h3>10:00 am</h3>
              </div>
              <div className="py-2 px-4 border border-gray-100 rounded-md">
                <h3>10:00 am</h3>
              </div>
            </div>

            <div className="flex gap-8">
              <Button className="!px-12">Next</Button>
              <Button
                leftIcon={
                  <Image
                    src="/assets/icons/cancel.svg"
                    alt="Cancel icon"
                    width={20}
                    height={20}
                  />
                }
                className="bg-transparent !text-[#F44336] underline underline-offset-2"
              >
                Cancel
              </Button>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
