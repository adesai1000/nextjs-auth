import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Welcome Back
      </h2>
      <form className="my-2">
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
          placeholder="*************"
          type="password"
          name="password"
          className="mb-6"
        />
        <button className="bg-black text-white w-full h-10 rounded-md font-medium">
          Login &rarr;
        </button>
        <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
          Don&apos;t have an account?{" "}
          <span className="hover:underline">
            <Link href="/register">Register</Link>
          </span>
        </p>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <form>
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] border"
          type="submit"
        >
          <Github className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Github
          </span>
        </button>
        <hr className="m-5" />
      </form>
      <form>
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] border"
          type="submit"
        >
          <Globe className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Google
          </span>
        </button>
      </form>
    </div>
  );
}
