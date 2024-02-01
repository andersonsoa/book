"use client";

import { createBookmark } from "@/app/actions/bookmarks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function CreateBookmark() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Bookmark</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What you want to save?</DialogTitle>
          <DialogDescription>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = new FormData(e.target as HTMLFormElement);

                await createBookmark({
                  title: form.get("title") as string,
                  description: form.get("description") as string,
                });
              }}
              className="space-y-4 mt-4"
            >
              <Input name="title" placeholder="Title" />
              <Input name="description" placeholder="Description" />

              <Button>Salvar</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
