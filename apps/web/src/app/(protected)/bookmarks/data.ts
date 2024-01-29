import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

type Bookmark = {
  id: number;
  title: string;
  description: string;
  link?: string;
};

export async function getBookmarks(): Promise<Bookmark[]> {
  const session = await getServerSession(authOptions);

  if (!session) throw new Error("session not found");

  const response = await fetch("http://localhost:3333/bookmarks", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.user.token}`,
    },
  });

  return response.json();
}
