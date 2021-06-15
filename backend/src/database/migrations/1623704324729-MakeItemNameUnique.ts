import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeItemNameUnique1623704324729 implements MigrationInterface {
    name = 'MakeItemNameUnique1623704324729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_item"("id", "name", "type", "rarity", "description", "image_path") SELECT "id", "name", "type", "rarity", "description", "image_path" FROM "item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`ALTER TABLE "temporary_item" RENAME TO "item"`);
        await queryRunner.query(`CREATE TABLE "temporary_item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL, CONSTRAINT "UQ_31edb68f5a4eee7f284cb549017" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "temporary_item"("id", "name", "type", "rarity", "description", "image_path") SELECT "id", "name", "type", "rarity", "description", "image_path" FROM "item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`ALTER TABLE "temporary_item" RENAME TO "item"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" RENAME TO "temporary_item"`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "item"("id", "name", "type", "rarity", "description", "image_path") SELECT "id", "name", "type", "rarity", "description", "image_path" FROM "temporary_item"`);
        await queryRunner.query(`DROP TABLE "temporary_item"`);
        await queryRunner.query(`ALTER TABLE "item" RENAME TO "temporary_item"`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "rarity" integer NOT NULL, "description" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "item"("id", "name", "type", "rarity", "description", "image_path") SELECT "id", "name", "type", "rarity", "description", "image_path" FROM "temporary_item"`);
        await queryRunner.query(`DROP TABLE "temporary_item"`);
    }

}
