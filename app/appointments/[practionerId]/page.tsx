import { PRACTIONERS } from "@/constants/practioner";
import Image from "next/image";

export default function Page({ params }: { params: { practionerId: string } }) {
  const practioner = PRACTIONERS.find(
    (practioner) => practioner.id === params.practionerId
  );

  if (!practioner) {
    return <p className="section">Practioner Not Found</p>;
  }

  return (
    <main>
      <section className="section bg-accent-20">
        <h2 className="text-2xl">Doctor Profile</h2>
      </section>

      <section className="section flex flex-col gap-8 md:flex-row">
        <Image
          src={practioner.img}
          alt={`Image of Doctor ${practioner.name}`}
          width={400}
          height={800}
          className="w-full max-w-xs"
        />

        <section>
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl">Dr. {practioner.name}</h2>
            <div className="flex gap-2">
              <Image
                src="/assets/icons/hospital.svg"
                alt="Hospital building icon"
                width={20}
                height={20}
              />
              <p className="text-[#7A7A7A] text-xs">
                {practioner.profession} at{" "}
                <span className="uppercase">{practioner.hospital}</span>
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
        </section>
      </section>
    </main>
  );
}
