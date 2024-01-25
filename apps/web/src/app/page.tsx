import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center h-screen">
      <h1>Seja bem vindo!</h1>
      <Link href="/dashboard">
        <Button>Ir para o Dashboard</Button>
      </Link>
    </section>
  );
}
