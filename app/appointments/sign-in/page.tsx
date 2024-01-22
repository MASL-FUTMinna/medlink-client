'use client'
import Button from "@/components/ui/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cookieSetter } from "@/utils/cookieSetter";

interface FormData {
  email: string;
  password: string;
}

export default function Page() {
  const router = useRouter();
  const initialForm = {
    email: "",
    password: "",
  };

  const [errors, setErrors] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://medlink-server-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.message);
        setIsLoading(false);
        console.error('Error:', errorData.message);
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      setIsLoading(false)
      setFormData(initialForm);
      cookieSetter(data.access_token)
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-fit md:flex-row">
        <div className="px-6 flex flex-col gap-4 md:px-16 md:w-1/2 w-full p-16 rounded-md border border-zinc-900 border-opacity-5 my-10">
          <h1 className="text-zinc-900 text-center font-medium text-4xl lg:text-5xl tracking-tight">
            Welcome Back
          </h1>
          <p className="text-center text-zinc-900 text-base font-normal leading-snug tracking-tight">Complete details to sign in</p>
          <form onSubmit={handleSubmit} className="mt-16">
            {errors && <p className="text-red-500 text-xl font-medium leading-snug">{errors}</p>}
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-zinc-900 text-[13px] font-medium leading-snug">Email</label>
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
              <label htmlFor="password" className="text-zinc-900 text-[13px] font-medium leading-snug">Password</label>
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
              <Button className="justify-center p-6 bg-indigo-500 rounded shadow" type="submit" disabled={isLoading}>Submit</Button>
              {successMessage && <p className="text-green-500 text-xl font-medium leading-snug">{successMessage}</p>}
              <p className="text-center text-zinc-900 text-sm font-normal leading-snug">
                Don’t have an account yet?{" "}
                <Link href="/appointments/sign-up" className=" text-indigo-800 text-sm font-semibold underline leading-snug">
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
