"use client";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetHospitals } from "@/api/hospitals";
import { HospitalProps } from "@/types/hospital";
import { useForm } from "react-hook-form";
import { PractitionerSignupSchemaType, practitionerSignupSchema } from "@/schemas/practitionerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePractitionerSignUp } from "@/api/practitioner";
import { Input } from "@/components/custom";

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
	const { data: hospitals, isLoading: isFetching } = useGetHospitals(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<PractitionerSignupSchemaType>({
		resolver: yupResolver(practitionerSignupSchema),
	});

	const { isPending, mutate } = usePractitionerSignUp();

	const onSubmit = (data: PractitionerSignupSchemaType) => {
		mutate(data);
	};

	return (
		<main>
			<section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] md:min-h-fit md:flex-row">
				<div className="px-6 flex flex-col gap-4 md:px-16 md:w-1/2 w-full p-16 rounded-md border border-zinc-900 border-opacity-5 my-10">
					<h1 className="text-zinc-900 text-center font-medium text-4xl lg:text-5xl tracking-tight">Welcome</h1>
					<p className="text-center text-zinc-900 text-base font-normal leading-snug tracking-tight">
						Complete details to sign up
					</p>
					<form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-7">
						<Input
							errors={errors}
							label="First Name"
							placeholder="Enter Your First Name"
							name="firstName"
							control={control}
						/>
						<Input
							errors={errors}
							label="Last Name"
							placeholder="Enter Your Last Name"
							name="lastName"
							control={control}
						/>
						<Input
							errors={errors}
							label="Email"
							type="email"
							placeholder="Enter Your Email"
							name="email"
							control={control}
						/>
						<Input errors={errors} label="Bio" placeholder="bio..." name="bio" control={control} />
						<Input
							errors={errors}
							label="Specialization"
							placeholder="Specialization"
							name="specialization"
							control={control}
						/>

						<Input
							errors={errors}
							label="Select Hospital"
							type="select"
							name="hospitalId"
							placeholder="photo"
							options={hospitals?.data?.map((hospital: HospitalProps) => ({
								value: hospital.id,
								label: hospital.name,
							}))}
							control={control}
						/>

						<Input errors={errors} label="Photo" type="file" name="photo" placeholder="photo" control={control} />

						<Input
							errors={errors}
							label="Password"
							placeholder="Enter Your Password"
							control={control}
							name="password"
							type="password"
						/>
						<Input
							errors={errors}
							label="Confirm Password"
							placeholder="Confirm Your Password"
							control={control}
							name="confirmPassword"
							type="password"
						/>

						<Button
							className="justify-center w-full p-6 bg-secondary rounded shadow"
							type="submit"
							isLoading={isPending}
						>
							Submit
						</Button>

						<p className="text-center text-zinc-900 text-sm font-normal leading-snug">
							Already have an account?{" "}
							<Link href="/auth/sign-in" className=" text-indigo-800 text-sm font-semibold underline leading-snug">
								Sign In
							</Link>
						</p>
					</form>
				</div>
			</section>
		</main>
	);
}
