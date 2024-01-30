import { authOptions } from "@/lib/auth";
import { TBookmark } from "@/types/domain.types";
import { getServerSession } from "next-auth";

export async function getBookmarks(): Promise<TBookmark[] | null> {
  const session = await getServerSession(authOptions);

  if (!session) throw new Error("session not found");

  await new Promise((res) => setTimeout(res, 2000));

  const response = await fetch("http://localhost:3333/bookmarks", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.user.token}`,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) return null;

  return response.json();
}

export async function createBookmark(data: TBookmark) {
  const session = await getServerSession(authOptions);

  if (!session) throw new Error("session not found");

  const response = await fetch("http://localhost:3333/bookmarks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return null;

  return response.json();
}
