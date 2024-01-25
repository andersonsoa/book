import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { AuthDto } from './dto';
import { DatabaseService } from 'src/database/database.service';
import { users } from 'src/database/schema';
import { eq } from 'drizzle-orm';

@Injectable({})
export class AuthService {
  constructor(
    private service: DatabaseService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.service.db
        .insert(users)
        .values({
          email: dto.email,
          hash,
        })
        .returning({ id: users.id, email: users.email });

      return this.signToken(user.at(0).id, user.at(0).email);
    } catch (error) {
      console.log({ error });
      throw new ForbiddenException('Credentials taken');
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.service.db.query.users.findFirst({
      where: eq(users.email, dto.email),
    });

    if (!user) throw new ForbiddenException('Credentials are incorrect.');

    const pwMatch = await argon.verify(user.hash, dto.password);
    if (!pwMatch) throw new ForbiddenException('Credentials are incorrect.');

    const { access_token } = await this.signToken(user.id, user.email);

    return {
      access_token,
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });

    return {
      access_token: token,
    };
  }
}
