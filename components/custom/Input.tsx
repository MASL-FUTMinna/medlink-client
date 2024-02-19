import { cn } from "@/lib/utils";
// @ts-ignore
import * as lodash from "lodash";
import React, { useState } from "react";
import { Control, Controller, DeepMap, FieldError, FieldErrors, FieldValues, Path } from "react-hook-form";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export type FormInputProps<TFormValues extends FieldValues = FieldValues> = {
	placeholder: string;
	label: React.ReactNode;
	control: Control<any>;
	errors?: Partial<DeepMap<TFormValues, FieldError>> | FieldErrors<TFormValues>;
	name: Path<TFormValues>;
	type?: string;
	options?: { value: string | number; label: string }[]; // For select input
	accept?: string; // For file input
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "name" | "type">;

export default function Input({
	name,
	label,
	control,
	errors,
	type = "text",
	options,
	accept,
	className,
	...props
}: FormInputProps) {
	const error_message = lodash.get(errors, name);
	const hasError = !!errors && error_message;

	const [show, setShow] = useState(type !== "password");

	return (
		<div className="relative">
			<label htmlFor={name} className="text-zinc-900 text-sm font-medium leading-snug ml-2 mb-2">
				{label}
			</label>

			<div className="relative">
				<Controller
					control={control}
					name={name}
					render={({ field: { onChange, value, onBlur } }) =>
						type === "select" ? ( // Render select input if type is select
							<select
								{...props}
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								className={cn(
									"px-6 h-[55px] text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none",
									hasError && "border-red-500 border",
									className
								)}
							>
								{options?.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						) : type === "file" ? (
							<input
								{...props}
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								className={cn(
									"p-6  text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none",
									hasError && "border-red-500 border",
									className
								)}
								type={"file"} // Use show state for password type
								accept={accept} // Pass accept prop for file input
							/>
						) : (
							// Render file or text input otherwise
							<input
								{...props}
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								className={cn(
									"p-6  text-sm w-full bg-white rounded-2xl border border-stone-300 focus:outline-none",
									hasError && "border-red-500 border",
									className
								)}
								type={show ? "text" : "password"} // Use show state for password type
								accept={accept} // Pass accept prop for file input
							/>
						)
					}
				/>
				{type === "password" && (
					<div
						onClick={() => setShow(!show)}
						className="absolute top-0 right-0 h-full flex items-center px-6 text-slate-600 cursor-pointer text-xl"
					>
						{show ? <FaEye /> : <FaEyeSlash />}
					</div>
				)}
			</div>

			{hasError && <p className="text-xs mt-1 font-medium px-3 text-red-500">{error_message?.message}</p>}
		</div>
	);
}
