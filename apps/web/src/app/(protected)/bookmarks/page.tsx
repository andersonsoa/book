import { BookmarkList } from "@/components/bookmark-list";
import { BookmarkListLoader } from "@/components/bookmark-list-loader";
import { CreateBookmark } from "@/components/create-bookmark";
import { Suspense } from "react";

export default function Bookmarks() {
  return (
    <main className="max-w-7xl w-full mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Bookmarks</h1>
        <CreateBookmark />
      </div>

      <Suspense fallback={<BookmarkListLoader />}>
        <BookmarkList />
      </Suspense>
    </main>
  );
}
