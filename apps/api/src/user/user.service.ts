import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
import { DatabaseService } from 'src/database/database.service';
import { users } from 'src/database/schema';
import { eq } from 'drizzle-orm';

@Injectable({})
export class UserService {
  constructor(private service: DatabaseService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.service.db
      .update(users)
      .set({
        ...dto,
      })
      .where(eq(users.id, userId))
      .returning();

    return user;
  }

  async listUsers() {
    return this.service.db.query.users.findMany();
  }
}
