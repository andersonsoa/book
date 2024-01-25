"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="grid place-items-center h-screen bg-zinc-200">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = new FormData(e.target as HTMLFormElement);

          await signIn("credentials", {
            email: form.get("email"),
            password: form.get("password"),

            redirect: true,
            callbackUrl: "/dashboard",
          });
        }}
        className="grid gap-4"
      >
        <div className="flex justify-center mb-8">
          <Image src="/next.svg" alt="Logo" width={200} height={200} priority />
        </div>
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <Button>Entrar</Button>
      </form>
    </section>
  );
}
