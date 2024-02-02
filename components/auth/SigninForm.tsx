"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { LoginSchemaType, loginSchema } from "@/schemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/api/auth";
import AuthCard from "./AuthCard";
import { Input } from "../custom";

export default function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginSchema),
  });

  const { isPending, mutate } = useLogin();

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
  };
  return (
    <AuthCard title="Welcome" subtitle="Complete details to sign in">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
        <div className="flex flex-col gap-4">
          <Input
            errors={errors}
            label="Email"
            placeholder="Enter Your Email"
            name="email"
            // @ts-ignore
            control={control}
          />

          <Input
            errors={errors}
            label="Password"
            placeholder="Enter Your Password"
            // @ts-ignore
            control={control}
            name="password"
            type="password"
          />

          <Button
            className="justify-center p-6 bg-indigo-500 rounded shadow"
            type="submit"
            isLoading={isPending}
          >
            Submit
          </Button>

          <p className="text-center text-zinc-900 text-sm font-normal leading-snug">
            Don’t have an account yet?{" "}
            <Link
              href="/auth/sign-up"
              className=" text-indigo-800 text-sm font-semibold underline leading-snug"
            >
              Create one
            </Link>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}
