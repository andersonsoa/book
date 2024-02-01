import { getBookmarks } from "@/app/actions/bookmarks";

export async function BookmarkList() {
  const bookmarks = await getBookmarks();
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
      {bookmarks?.map((b) => (
        <div
          key={b.id}
          className="p-6 rounded border border-zinc-300 shadow bg-zinc-200 backdrop-blur"
        >
          <p className="text-lg font-bold mb-2">{b.title}</p>
          <p className="text-sm text-zinc-500">{b.description}</p>
        </div>
      ))}
    </div>
  );
}
