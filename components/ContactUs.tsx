import Image from "next/image";
import Button from "./ui/Button";

export default function ContactSection() {
  return (
    <section className="section py-16 flex flex-col gap-4 items-center lg:gap-24 md:flex-row">
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-semibold text-3xl">
          Our Medical Team works effortlessly
        </h3>
        <p className="font-medium">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings
        </p>
        <p className="font-medium">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings
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
      <Image
        src="/assets/images/medical-team.png"
        alt="medical team"
        width={400}
        height={400}
        className="w-full md:w-1/2"
      />
    </section>
  );
}