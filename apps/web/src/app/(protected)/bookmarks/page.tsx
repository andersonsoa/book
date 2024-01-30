import { BookmarkList } from "@/components/bookmark-list";
import { BookmarkListLoader } from "@/components/bookmark-list-loader";
import { CreateBookmark } from "@/components/create-bookmark";
import { Suspense } from "react";

export default function Bookmarks() {
  return (
    <main className="max-w-5xl w-full mx-auto p-4">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-2xl font-bold mb-6">My Bookmarks</h1>
        <CreateBookmark />
      </div>

      <Suspense fallback={<BookmarkListLoader />}>
        <BookmarkList />
      </Suspense>
    </main>
  );
}
