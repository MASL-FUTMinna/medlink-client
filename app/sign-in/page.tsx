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
            Sign In
          </h1>

          <form>
            <div className="flex flex-col gap-4">
              <input
                type="search"
                required
                placeholder="Unique ID"
                className="p-4 rounded text-sm w-full"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="p-4 rounded text-sm w-full"
              />
              <Button className="rounded-full justify-center">Next</Button>
              <p className="text-center">
                No account yet?{" "}
                <Link href="/sign-up" className=" text-accent-800">
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
