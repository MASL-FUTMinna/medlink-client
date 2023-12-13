import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="section w-full flex justify-between items-center">
        <h2>
          <Link href="/" className="text-accent-800 text-2xl">
            Medlink
          </Link>
        </h2>

        <div className="flex justify-end gap-20 font-head">
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Appointments</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-2 items-center font-semibold text-accent-800">
            <Image
              src="assets/icons/user.svg"
              alt="User icon"
              width={25}
              height={25}
            />
            <Link href="/sign-in">Sign in</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
