import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEnumsInItemAndUser1625335376331 implements MigrationInterface {
    name = 'AddEnumsInItemAndUser1625335376331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL, "tag" varchar CHECK( tag IN ('stone','boss_item','event','world','level') ), CONSTRAINT "UQ_31edb68f5a4eee7f284cb549017" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "temporary_item"("id", "name", "type", "rarity", "description", "image_path") SELECT "id", "name", "type", "rarity", "description", "image_path" FROM "item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`ALTER TABLE "temporary_item" RENAME TO "item"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar CHECK( role IN ('admin','user','super') ) NOT NULL DEFAULT ('user'), "image_path" varchar NOT NULL, CONSTRAINT "UQ_3021ae0235cf9c4a6d59663f859" UNIQUE ("username"))`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "nickname", "username", "password", "role", "image_path") SELECT "id", "nickname", "username", "password", "role", "image_path" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "image_path" varchar NOT NULL, CONSTRAINT "UQ_3021ae0235cf9c4a6d59663f859" UNIQUE ("username"))`);
        await queryRunner.query(`INSERT INTO "user"("id", "nickname", "username", "password", "role", "image_path") SELECT "id", "nickname", "username", "password", "role", "image_path" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "item" RENAME TO "temporary_item"`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL, CONSTRAINT "UQ_31edb68f5a4eee7f284cb549017" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "item"("id", "name", "type", "rarity", "description", "image_path") SELECT "id", "name", "type", "rarity", "description", "image_path" FROM "temporary_item"`);
        await queryRunner.query(`DROP TABLE "temporary_item"`);
    }

}
