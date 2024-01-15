import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Image from "next/image";
import HealthNews from "@/components/HealthNews";
import ContactUs from "@/components/ContactUs";
import BookAppointment from "@/components/BookAppointment";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Partners />
      <WhyChooseUs />
      <ContactUs />
      <BookAppointment />
      <HealthNews />
      <ContactForm />
      <FAQ />
    </main>
  );
}
