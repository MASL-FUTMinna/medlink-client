"use client";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bio: string;
  specialization: string;
  hospitalId: string;
  photo: File | null;
}

export default function Page() {
  const router = useRouter();

  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: '',
    specialization: '',
    hospitalId: '',
    photo: null, 
  };

  const [errors, setErrors] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleInput = (e: { target: { name: string; value: string; type: string } }) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      console.log(formData.photo)
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).files?.[0] || null,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    setErrors(null);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://medlink-server-production.up.railway.app/practitioners",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.message || "Failed to create an account");
        setIsLoading(false);
        console.error("Error:", errorData.message);
      }
      const data = await response.json();
      console.log("Success:", data);
      setSuccessMessage("Account Created Sucessfully");
      setIsLoading(false);
      setFormData(initialForm);
      router.push("/practitioner/sign-in");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-fit md:flex-row">
        <div className="px-6 flex flex-col gap-4 md:px-16 md:w-1/2 w-full p-16 rounded-md border border-zinc-900 border-opacity-5 my-10">
          <h1 className="text-zinc-900 text-center font-medium text-4xl lg:text-5xl tracking-tight">
            Welcome
          </h1>
          <p className="text-center text-zinc-900 text-base font-normal leading-snug tracking-tight">
            Complete details to sign up
          </p>
          <form onSubmit={handleSubmit} className="mt-16">
            {errors && (
              <p className="text-red-500 text-xl font-medium leading-snug">
                {errors}
              </p>
            )}
            <div className="flex flex-col gap-4">
              <label
                htmlFor="firstName"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                name="firstName"
                onChange={handleInput}
                placeholder="Enter First Name"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              <label
                htmlFor="lastName"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                name="lastName"
                onChange={handleInput}
                placeholder="Enter Last Name"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              <label
                htmlFor="email"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                name="email"
                onChange={handleInput}
                placeholder="Enter Email"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleInput}
                required
                placeholder="Enter Password"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              <label
                htmlFor="bio"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Bio
              </label>
              <textarea
                id="bio"
                required
                value={formData.bio}
                name="bio"
                onChange={handleInput}
                placeholder="Enter Bio"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              
              <label
                htmlFor="specialization"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Specialization
              </label>
              <input
                type="text"
                id="specialization"
                required
                value={formData.specialization}
                name="specialization"
                onChange={handleInput}
                placeholder="Enter Specialization"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              
              <label
                htmlFor="hospitalId"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Hospital ID
              </label>
              <input
                type="text"
                id="hospitalId"
                required
                value={formData.hospitalId}
                name="hospitalId"
                onChange={handleInput}
                placeholder="Enter Hospital ID"
                className="p-6 text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none"
              />
              
              <label
                htmlFor="photo"
                className="text-zinc-900 text-[13px] font-medium leading-snug"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                onChange={handleInput}
                accept="image/*"
                name="photo"
              />
              <Button
                className="justify-center p-6 bg-indigo-500 rounded shadow"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting" : "Submit"}
              </Button>
              {successMessage && (
                <p className="text-green-500 text-2xl font-medium leading-snug">
                  {successMessage}
                </p>
              )}
              <p className="text-center text-zinc-900 text-sm font-normal leading-snug">
                Already have an account?{" "}
                <Link
                  href="/practitioner/sign-in"
                  className=" text-indigo-800 text-sm font-semibold underline leading-snug"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
