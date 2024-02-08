import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Database from "better-sqlite3"

import * as schema from './schema';

@Injectable({})
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private _db: BetterSQLite3Database<typeof schema>
  private _database = new Database('bookmarks.db') 

  constructor(private config: ConfigService) {}

  get db() {
    return this._db;
  }

  async onModuleInit() {
    this._db = drizzle(this._database, { schema });
  }

  async onApplicationShutdown(signal?: string) {
    console.log({ signal });
  }
}
