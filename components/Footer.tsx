"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  if (pathName !== "/") return null;
  return (
    <footer className="section py-16 bg-accent-900 text-accent-200">
      <h2 className="mb-8">
        <Link href="/" className="text-accent-800 font-extrabold text-2xl">
          FindCare
        </Link>
      </h2>

      <section className="flex justify-between flex-wrap gap-16">
        <section>
          <h4 className="text-white font-semibold">Categories</h4>
          <ul className="underline mt-6 flex flex-col gap-6">
            <li>
              <Link href="/">Getting Started</Link>
            </li>
            <li>
              <Link href="/">Account</Link>
            </li>
            <li>
              <Link href="/">Billing</Link>
            </li>
            <li>
              <Link href="/">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Status</Link>
            </li>
            <li>
              <Link href="/">Chanelog</Link>
            </li>
          </ul>
        </section>
        <section>
          <h4 className="text-white font-semibold">Security</h4>
          <ul className="underline mt-6 flex flex-col gap-6">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookies Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
          </ul>
        </section>
        <section>
          <h4 className="text-white font-semibold">Social Media</h4>
          <ul className="underline mt-6 flex flex-col gap-6">
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Twitter</Link>
            </li>
            <li>
              <Link href="/">YouTube</Link>
            </li>
          </ul>

          <h4 className="mt-8 text-white font-semibold">Support</h4>
          <ul className="underline mt-6 flex flex-col gap-6">
            <li>
              <Link href="/">Direct message</Link>
            </li>
            <li>
              <Link href="/">Search</Link>
            </li>
            <li>
              <Link href="/">Call us</Link>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
