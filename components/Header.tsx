import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import Navbar from "./Navbar";

const Header = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");


  return (
    <Navbar token={token} />
  );
};

export default Header;
