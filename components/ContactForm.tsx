import Image from "next/image";
import { Button } from "./ui/Button";

const ContactForm = () => {
  return (
    <section className="w-full section scroll-mt-20" id="contact">
      <div className="py-16 px-2 flex flex-col gap-8 items-center justify-center text-center bg-accent-100 rounded-3xl relative">
        <h3 className="text-3xl font-semibold z-[10]  ">Contact Us</h3>
        <p className="font-medium max-w-2xl">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings.
        </p>

        <form className="flex flex-col gap-4 items-center w-full max-w-lg md:flex-row z-[10]">
          <input
            type="email"
            placeholder="Email address"
            className="w-3/5 py-4 px-6 rounded-md outline-none text-sm"
          />
          <Button
            leftIcon={
              <Image
                src="/assets/icons/chat.svg"
                alt="chat icon"
                width={20}
                height={20}
              />
            }
          >
            Send a mail
          </Button>
        </form>
        <Image
          src="/assets/images/contact-bg.png"
          alt="Partners"
          width={600}
          height={400}
          className="absolute top-0 left-2 rotate-180"
        />
        <Image
          src="/assets/images/contact-bg.png"
          alt="Partners"
          width={600}
          height={400}
          className="absolute bottom-0 right-2"
        />
      </div>
    </section>
  );
};

export default ContactForm;
