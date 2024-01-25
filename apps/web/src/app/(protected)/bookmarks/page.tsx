import { SignOut } from "@/components/sign-out";
import { getServerSession } from "next-auth";

export default async function Bookmarks() {
  const session = await getServerSession();
  return (
    <>
      <header className="fixed top-0 inset-x-0 p-4 backdrop-blur-md bg-zinc-700/25 shadow-md">
        <div className="flex justify-between w-full">
          <div className="flex gap-6 items-center">Home</div>

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
    </>
  );
}
