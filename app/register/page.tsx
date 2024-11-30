"use client";
import { register } from "@/action/user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Register() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Welcome
      </h2>
      <p className="text-gray-700 text-sm max-w-sm mt-2 dark:text-neutral-500 font-semibold">
        Create an Account
      </p>
      <form className="my-8" action={register}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col">
            <Label htmlFor="firstname" className="mb-2">
              First Name
            </Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              name="firstname"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="lastname" className="mb-2">
              Last Name
            </Label>
            <Input
              id="lastname"
              placeholder="Appleseed"
              type="text"
              name="lastname"
            />
          </div>
        </div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="johnappleseed@gmail.com"
          type="email"
          name="email"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="***********"
          type="password"
          name="password"
          className="mb-5"
        />
        <button className="bg-black text-white w-full h-10 rounded-md font-medium">
          Sign up &rarr;
        </button>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Already have an account?{" "}
          <span className="hover:underline">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
