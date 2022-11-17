import { Button, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50">
      <form className="border border-black/20  min-w-[400px] shadow-sm rounded-lg bg-white flex flex-col justify-start p-10 space-y-3">
        <Center>
          <Image alt="logo" src="/assets/logo.png" height={50} width={50} />
        </Center>
        <h1 className="text-2xl text-center">Admin Login 🔐</h1>
        <div className="flex space-y-1 flex-col items-start">
          <label htmlFor="email" className="font-bold text-sm">
            Email
          </label>
          <input
            required
            type="email"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="flex space-y-1 flex-col items-start">
          <label htmlFor="password" className="font-bold text-sm">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            className="border p-2 w-full rounded-md"
          />
        </div>
        <Button type="submit" colorScheme="telegram">
          Login
        </Button>

        <Center>
          <Link href="/events">
            <Button colorScheme="telegram" variant="link">
              Go back
            </Button>
          </Link>
        </Center>
      </form>
    </div>
  );
};

export default login;
