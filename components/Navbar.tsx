'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FaAngleDown } from 'react-icons/fa';

interface token {
    name: string;
    value: string;
}


const Navbar = ({ token }: { token: token }) => {
    const pathname = usePathname()

    const isPractitionerPage = pathname.startsWith("/practitioner")

    return (
        <header className="sticky top-0 backdrop-blur-xl z-50">
            <nav className="section w-full flex justify-between items-center">
                <h2>
                    <Link href="/" className="text-accent-800 font-extrabold text-2xl">
                        Medlink
                    </Link>
                </h2>

                <div className="flex justify-end gap-20 font-head">
                    <ul className="gap-8 hidden md:flex">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href={isPractitionerPage ? "/practitioner/add-schedule" : "/appointments"}>
                                {isPractitionerPage ? (
                                    `${token ? "Check Schedule" : ""}`
                                ) : (
                                    "Book Appointment"
                                )}
                            </Link>
                        </li>
                        <li>
                            <a href="/#faq">FAQ</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>

                    <div className="flex gap-2 items-center font-semibold text-accent-800">
                        {token ? (
                            <Link href={isPractitionerPage ? "/practitioner" : "/appointments/history"}>
                                
                                {isPractitionerPage ? (
                                    "View Appointments"
                                ) : (
                                    "Appointments History"
                                )}</Link>
                        ) : (
                            <>
                                <Image
                                    src="/assets/icons/user.svg"
                                    alt="User icon"
                                    width={25}
                                    height={25}
                                />
                                <Link href={isPractitionerPage ? "/practitioner/sign-in/" : "/appointments/sign-in/"}>
                                    Sign in
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
