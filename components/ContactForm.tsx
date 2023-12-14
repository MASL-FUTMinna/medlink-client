import Image from "next/image";
import Button from "./ui/Button";

const ContactForm = () => {
  return (
    <section className="w-full section">
      <div className="py-16 px-2 flex flex-col gap-8 items-center justify-center text-center bg-accent-100 rounded-xl">
        <h3 className="text-3xl font-semibold">Contact Us</h3>
        <p className="font-medium max-w-2xl">
          Effortlessly manage your appointments with our intuitive doctor&apos;s
          appointment system. Say goodbye to scheduling hassles and hello to
          seamless, convenient bookings.
        </p>

        <form className="flex flex-col gap-4 items-center w-full max-w-lg md:flex-row">
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
      </div>
    </section>
  );
};

export default ContactForm;
