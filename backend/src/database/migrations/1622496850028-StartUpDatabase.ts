import {MigrationInterface, QueryRunner} from "typeorm";

export class StartUpDatabase1622496850028 implements MigrationInterface {
    name = 'StartUpDatabase1622496850028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dungeon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user_to_item" ("userToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" varchar NOT NULL, "itemId" integer NOT NULL, "quantity" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "talent" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL, "image_path" varchar NOT NULL, "characterId" integer)`);
        await queryRunner.query(`CREATE TABLE "character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "element" varchar NOT NULL, "type_weapon" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user_characters_character" ("userId" varchar NOT NULL, "characterId" integer NOT NULL, PRIMARY KEY ("userId", "characterId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4d057cc88bda2b0904c52e5caa" ON "user_characters_character" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cf3204b8ce361b6e18c98b1a8" ON "user_characters_character" ("characterId") `);
        await queryRunner.query(`CREATE TABLE "character_telent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_eb42f95285d7cd37d507a1932d" ON "character_telent_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f8db9f765ab8b1c55d49ee28e8" ON "character_telent_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE TABLE "character_xp_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59083e53dd6fabbaecb9ed5bbb" ON "character_xp_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cd2d1609aec659f7455ee01b1" ON "character_xp_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE TABLE "character_ascencion_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8e0f1da364539bf9266285b6d7" ON "character_ascencion_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_09940743caa6a76527e7922dc6" ON "character_ascencion_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE TABLE "temporary_dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL, CONSTRAINT "FK_60926da2171dbeb1c5a1108cf85" FOREIGN KEY ("dungeonId") REFERENCES "dungeon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b738bc33499a0d6a43cf17f3d76" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_dungeon_to_item"("dungeonToItemId", "dungeonId", "itemId", "day") SELECT "dungeonToItemId", "dungeonId", "itemId", "day" FROM "dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "dungeon_to_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_dungeon_to_item" RENAME TO "dungeon_to_item"`);
        await queryRunner.query(`CREATE TABLE "temporary_user_to_item" ("userToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" varchar NOT NULL, "itemId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "FK_66e784eb437232c221443bc49c8" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_afdf6818f44e0dd74220b678052" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_user_to_item"("userToItemId", "userId", "itemId", "quantity") SELECT "userToItemId", "userId", "itemId", "quantity" FROM "user_to_item"`);
        await queryRunner.query(`DROP TABLE "user_to_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_user_to_item" RENAME TO "user_to_item"`);
        await queryRunner.query(`CREATE TABLE "temporary_talent" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL, "image_path" varchar NOT NULL, "characterId" integer, CONSTRAINT "FK_95553313e84191fcc08114e6571" FOREIGN KEY ("characterId") REFERENCES "character" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_talent"("id", "name", "level", "image_path", "characterId") SELECT "id", "name", "level", "image_path", "characterId" FROM "talent"`);
        await queryRunner.query(`DROP TABLE "talent"`);
        await queryRunner.query(`ALTER TABLE "temporary_talent" RENAME TO "talent"`);
        await queryRunner.query(`DROP INDEX "IDX_4d057cc88bda2b0904c52e5caa"`);
        await queryRunner.query(`DROP INDEX "IDX_3cf3204b8ce361b6e18c98b1a8"`);
        await queryRunner.query(`CREATE TABLE "temporary_user_characters_character" ("userId" varchar NOT NULL, "characterId" integer NOT NULL, CONSTRAINT "FK_4d057cc88bda2b0904c52e5caaf" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3cf3204b8ce361b6e18c98b1a8b" FOREIGN KEY ("characterId") REFERENCES "character" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("userId", "characterId"))`);
        await queryRunner.query(`INSERT INTO "temporary_user_characters_character"("userId", "characterId") SELECT "userId", "characterId" FROM "user_characters_character"`);
        await queryRunner.query(`DROP TABLE "user_characters_character"`);
        await queryRunner.query(`ALTER TABLE "temporary_user_characters_character" RENAME TO "user_characters_character"`);
        await queryRunner.query(`CREATE INDEX "IDX_4d057cc88bda2b0904c52e5caa" ON "user_characters_character" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cf3204b8ce361b6e18c98b1a8" ON "user_characters_character" ("characterId") `);
        await queryRunner.query(`DROP INDEX "IDX_eb42f95285d7cd37d507a1932d"`);
        await queryRunner.query(`DROP INDEX "IDX_f8db9f765ab8b1c55d49ee28e8"`);
        await queryRunner.query(`CREATE TABLE "temporary_character_telent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "FK_eb42f95285d7cd37d507a1932d3" FOREIGN KEY ("characterId") REFERENCES "character" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f8db9f765ab8b1c55d49ee28e81" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "temporary_character_telent_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "character_telent_itens_item"`);
        await queryRunner.query(`DROP TABLE "character_telent_itens_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_character_telent_itens_item" RENAME TO "character_telent_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_eb42f95285d7cd37d507a1932d" ON "character_telent_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f8db9f765ab8b1c55d49ee28e8" ON "character_telent_itens_item" ("itemId") `);
        await queryRunner.query(`DROP INDEX "IDX_59083e53dd6fabbaecb9ed5bbb"`);
        await queryRunner.query(`DROP INDEX "IDX_3cd2d1609aec659f7455ee01b1"`);
        await queryRunner.query(`CREATE TABLE "temporary_character_xp_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "FK_59083e53dd6fabbaecb9ed5bbbe" FOREIGN KEY ("characterId") REFERENCES "character" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3cd2d1609aec659f7455ee01b16" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "temporary_character_xp_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "character_xp_itens_item"`);
        await queryRunner.query(`DROP TABLE "character_xp_itens_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_character_xp_itens_item" RENAME TO "character_xp_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_59083e53dd6fabbaecb9ed5bbb" ON "character_xp_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cd2d1609aec659f7455ee01b1" ON "character_xp_itens_item" ("itemId") `);
        await queryRunner.query(`DROP INDEX "IDX_8e0f1da364539bf9266285b6d7"`);
        await queryRunner.query(`DROP INDEX "IDX_09940743caa6a76527e7922dc6"`);
        await queryRunner.query(`CREATE TABLE "temporary_character_ascencion_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "FK_8e0f1da364539bf9266285b6d7c" FOREIGN KEY ("characterId") REFERENCES "character" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_09940743caa6a76527e7922dc63" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "temporary_character_ascencion_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "character_ascencion_itens_item"`);
        await queryRunner.query(`DROP TABLE "character_ascencion_itens_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_character_ascencion_itens_item" RENAME TO "character_ascencion_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_8e0f1da364539bf9266285b6d7" ON "character_ascencion_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_09940743caa6a76527e7922dc6" ON "character_ascencion_itens_item" ("itemId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_09940743caa6a76527e7922dc6"`);
        await queryRunner.query(`DROP INDEX "IDX_8e0f1da364539bf9266285b6d7"`);
        await queryRunner.query(`ALTER TABLE "character_ascencion_itens_item" RENAME TO "temporary_character_ascencion_itens_item"`);
        await queryRunner.query(`CREATE TABLE "character_ascencion_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "character_ascencion_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "temporary_character_ascencion_itens_item"`);
        await queryRunner.query(`DROP TABLE "temporary_character_ascencion_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_09940743caa6a76527e7922dc6" ON "character_ascencion_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8e0f1da364539bf9266285b6d7" ON "character_ascencion_itens_item" ("characterId") `);
        await queryRunner.query(`DROP INDEX "IDX_3cd2d1609aec659f7455ee01b1"`);
        await queryRunner.query(`DROP INDEX "IDX_59083e53dd6fabbaecb9ed5bbb"`);
        await queryRunner.query(`ALTER TABLE "character_xp_itens_item" RENAME TO "temporary_character_xp_itens_item"`);
        await queryRunner.query(`CREATE TABLE "character_xp_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "character_xp_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "temporary_character_xp_itens_item"`);
        await queryRunner.query(`DROP TABLE "temporary_character_xp_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_3cd2d1609aec659f7455ee01b1" ON "character_xp_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE INDEX "IDX_59083e53dd6fabbaecb9ed5bbb" ON "character_xp_itens_item" ("characterId") `);
        await queryRunner.query(`DROP INDEX "IDX_f8db9f765ab8b1c55d49ee28e8"`);
        await queryRunner.query(`DROP INDEX "IDX_eb42f95285d7cd37d507a1932d"`);
        await queryRunner.query(`ALTER TABLE "character_telent_itens_item" RENAME TO "temporary_character_telent_itens_item"`);
        await queryRunner.query(`CREATE TABLE "character_telent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "character_telent_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "temporary_character_telent_itens_item"`);
        await queryRunner.query(`DROP TABLE "temporary_character_telent_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_f8db9f765ab8b1c55d49ee28e8" ON "character_telent_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE INDEX "IDX_eb42f95285d7cd37d507a1932d" ON "character_telent_itens_item" ("characterId") `);
        await queryRunner.query(`DROP INDEX "IDX_3cf3204b8ce361b6e18c98b1a8"`);
        await queryRunner.query(`DROP INDEX "IDX_4d057cc88bda2b0904c52e5caa"`);
        await queryRunner.query(`ALTER TABLE "user_characters_character" RENAME TO "temporary_user_characters_character"`);
        await queryRunner.query(`CREATE TABLE "user_characters_character" ("userId" varchar NOT NULL, "characterId" integer NOT NULL, PRIMARY KEY ("userId", "characterId"))`);
        await queryRunner.query(`INSERT INTO "user_characters_character"("userId", "characterId") SELECT "userId", "characterId" FROM "temporary_user_characters_character"`);
        await queryRunner.query(`DROP TABLE "temporary_user_characters_character"`);
        await queryRunner.query(`CREATE INDEX "IDX_3cf3204b8ce361b6e18c98b1a8" ON "user_characters_character" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4d057cc88bda2b0904c52e5caa" ON "user_characters_character" ("userId") `);
        await queryRunner.query(`ALTER TABLE "talent" RENAME TO "temporary_talent"`);
        await queryRunner.query(`CREATE TABLE "talent" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "level" integer NOT NULL, "image_path" varchar NOT NULL, "characterId" integer)`);
        await queryRunner.query(`INSERT INTO "talent"("id", "name", "level", "image_path", "characterId") SELECT "id", "name", "level", "image_path", "characterId" FROM "temporary_talent"`);
        await queryRunner.query(`DROP TABLE "temporary_talent"`);
        await queryRunner.query(`ALTER TABLE "user_to_item" RENAME TO "temporary_user_to_item"`);
        await queryRunner.query(`CREATE TABLE "user_to_item" ("userToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" varchar NOT NULL, "itemId" integer NOT NULL, "quantity" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user_to_item"("userToItemId", "userId", "itemId", "quantity") SELECT "userToItemId", "userId", "itemId", "quantity" FROM "temporary_user_to_item"`);
        await queryRunner.query(`DROP TABLE "temporary_user_to_item"`);
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" RENAME TO "temporary_dungeon_to_item"`);
        await queryRunner.query(`CREATE TABLE "dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "dungeon_to_item"("dungeonToItemId", "dungeonId", "itemId", "day") SELECT "dungeonToItemId", "dungeonId", "itemId", "day" FROM "temporary_dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "temporary_dungeon_to_item"`);
        await queryRunner.query(`DROP INDEX "IDX_09940743caa6a76527e7922dc6"`);
        await queryRunner.query(`DROP INDEX "IDX_8e0f1da364539bf9266285b6d7"`);
        await queryRunner.query(`DROP TABLE "character_ascencion_itens_item"`);
        await queryRunner.query(`DROP INDEX "IDX_3cd2d1609aec659f7455ee01b1"`);
        await queryRunner.query(`DROP INDEX "IDX_59083e53dd6fabbaecb9ed5bbb"`);
        await queryRunner.query(`DROP TABLE "character_xp_itens_item"`);
        await queryRunner.query(`DROP INDEX "IDX_f8db9f765ab8b1c55d49ee28e8"`);
        await queryRunner.query(`DROP INDEX "IDX_eb42f95285d7cd37d507a1932d"`);
        await queryRunner.query(`DROP TABLE "character_telent_itens_item"`);
        await queryRunner.query(`DROP INDEX "IDX_3cf3204b8ce361b6e18c98b1a8"`);
        await queryRunner.query(`DROP INDEX "IDX_4d057cc88bda2b0904c52e5caa"`);
        await queryRunner.query(`DROP TABLE "user_characters_character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "talent"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "user_to_item"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "dungeon"`);
    }

}
