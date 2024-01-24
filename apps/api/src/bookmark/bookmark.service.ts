import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { DatabaseService } from 'src/database/database.service';
import { and, eq } from 'drizzle-orm';
import { bookmarks } from 'src/database/schema';

@Injectable()
export class BookmarkService {
  constructor(private service: DatabaseService) {}

  async getBookmarks(userId: number) {
    return this.service.db.query.bookmarks.findMany({
      where: eq(bookmarks.userId, userId),
    });
  }

  async getBookmarkById(userId: number, bookmarkId: number) {
    return this.service.db.query.bookmarks.findFirst({
      where: and(eq(bookmarks.id, bookmarkId), eq(bookmarks.userId, userId)),
    });
  }

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.service.db.insert(bookmarks).values({
      ...dto,
      userId,
    });

    return bookmark;
  }

  async editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark = await this.service.db.query.bookmarks.findFirst({
      where: eq(bookmarks.id, bookmarkId),
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Access to resources denied');
    }

    return this.service.db
      .update(bookmarks)
      .set({
        ...dto,
      })
      .where(eq(bookmarks.id, bookmarkId))
      .returning();
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.service.db.query.bookmarks.findFirst({
      where: eq(bookmarks.id, bookmarkId),
    });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException('Access to resources denied');
    }

    await this.service.db
      .delete(bookmarks)
      .where(eq(bookmarks.id, bookmarkId))
      .returning();
  }
}
