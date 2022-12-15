import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="w-full px-10 py-5 flex justify-between items-center border-b">
      <Image alt="logo" src="/assets/logo.png" height={50} width={50} />
      <div className="space-x-4">
        {!user ? (
          <Link
            href="/admin/login"
            className="text-base text-gray-700 hover:underline"
          >
            Admin login
          </Link>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
        <Link
          href="/events"
          className="text-base text-gray-700 hover:underline"
        >
          Events
        </Link>
        <Link href="/news" className="text-base text-gray-700 hover:underline">
          News
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
