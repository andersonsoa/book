import { getBookmarks } from "@/services/bookmarks";

export async function BookmarkList() {
  const bookmarks = await getBookmarks();
  return (
    <div className="grid gap-2 grid-cols-2 lg:grid-cols-6">
      {bookmarks?.map((b) => (
        <div
          key={b.id}
          className="p-4 rounded border border-zinc-200 shadow bg-zinc-50 backdrop-blur"
        >
          <p className="text-lg font-bold mb-2">{b.title}</p>
          <p className="text-sm text-zinc-500">{b.description}</p>
        </div>
      ))}
    </div>
  );
}
