import PractionersList from "@/components/practitioners/PractitionersList";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="bg-accent-50 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-fit md:flex-row">
        <div className="px-6 flex flex-col gap-4 md:px-16 md md:w-1/2 w-full py-32">
          <h1 className="text-gray-900 text-center font-semibold text-4xl lg:text-5xl">
            Sign Up
          </h1>
          <p className="text-gray-700 text-center py-4">Nation Information</p>

          <form>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="NIN"
                className="p-4 rounded text-sm w-full"
              />
              <input
                type="text"
                required
                placeholder="BVN"
                className="p-4 rounded text-sm w-full"
              />
              <input
                type="text"
                required
                placeholder="Occupation"
                className="p-4 rounded text-sm w-full"
              />

              <Button className="rounded-full justify-center">Next</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
