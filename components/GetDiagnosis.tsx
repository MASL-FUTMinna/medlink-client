import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

export default function GetDiagnosis() {
  return (
    <section className="section bg-violet-50 py-28 w-full">
      <div className="flex flex-col items-center gap-5 mb-5 md:flex-row md:gap-20 md:mb-20">
        <div>
          <p className="text-indigo-500 text-lg font-normal mb-2 md:mb-8">
            AI Powered Diagnosis?
          </p>
          <h3 className="font-semibold text-3xl">
            Elevate Your Healthcare Experience with AI-Powered Diagnosis
          </h3>
        </div>
        <div>
          <p className="text-gray-600 text-base font-normal mb-2 md:mb-12">
            {`Introducing a revolutionary approach to healthcare. Your journey
            starts with a click – 'Get diagnosis'`}
          </p>
          <Link href="/diagnosis">
            <Button>Get Diagnosis</Button>
          </Link>
        </div>
      </div>
      <Image
        src="/assets/images/diagnosis-team.png"
        alt="medical team"
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
