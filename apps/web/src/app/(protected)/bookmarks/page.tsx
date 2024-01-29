import { getBookmarks } from "@/app/(protected)/bookmarks/data";
import Link from "next/link";

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();
  console.log({ bookmarks });
  return (
    <>
      <h1>My Bookmarks</h1>

      <div>
        {bookmarks?.map((b) => (
          <div key={b.id}>
            <Link href={`/bookmarks/${b.id}`}>{b.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
