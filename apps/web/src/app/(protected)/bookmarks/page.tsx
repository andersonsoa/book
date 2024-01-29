import { getBookmarks } from "@/app/(protected)/bookmarks/data";
import Link from "next/link";

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();
  return (
    <>
      <h1>My Bookmarks</h1>

      <div>
        <Link href="/bookmarks/1">bookmark 1</Link>
        <Link href="/bookmarks/2">bookmark 2</Link>
      </div>
    </>
  );
}
