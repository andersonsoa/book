import { SignOut } from "@/components/sign-out";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default async function ProtectedLayout(props: Props) {
  const session = await getServerSession();
  return (
    <section className="pt-16">
      <header className="fixed top-0 inset-x-0 backdrop-blur-md bg-zinc-700/25 shadow-md">
        <div className="flex justify-between items-center px-4 w-full h-16">
          <ul className="flex gap-4">
            <li>
              <Link href="/bookmarks">My Bookmarks</Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          </ul>

          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-zinc-800">
                {session?.user.name}
              </p>
              <span className="text-xs text-zinc-600 font-medium">
                {session?.user.email}
              </span>
            </div>
            <SignOut />
          </div>
        </div>
      </header>
      {props.children}
    </section>
  );
}
