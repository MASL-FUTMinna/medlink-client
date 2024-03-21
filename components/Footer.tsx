"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
	const pathName = usePathname();
	if (pathName !== "/") return null;
	return (
		<footer className="section py-16 bg-accent-900 text-accent-200">
			<h2 className="mb-8 lg:text-center">
				<Link href="/" className="text-accent-200 font-extrabold text-2xl lg:text-3xl xl:text-4xl">
					FindCare
				</Link>
			</h2>

			<section>
				{/* <h4 className="text-white font-semibold">Quick Links</h4> */}
				<ul className="underline mt-6 flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-10">
					<li>
						<Link href="/auth/sign-up">Getting Started</Link>
					</li>
					<li>
						<Link href="/auth/sign-in">Login</Link>
					</li>
					<li>
						<Link href="/appointments">Book Appointment</Link>
					</li>

					<li>
						<Link href="/#contact">Contact Us</Link>
					</li>

					<li>
						<Link href="/#faq">Frequently Asked Questions</Link>
					</li>
				</ul>
			</section>

			<hr className=" my-8" />

			<p className=" lg:text-lg font-medium lg:text-center text-accent-200">
				&copy; 2023 FindCare. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
