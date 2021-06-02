import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeUsernameUnique1622575372789 implements MigrationInterface {
    name = 'MakeUsernameUnique1622575372789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "nickname", "username", "password", "role", "image_path") SELECT "id", "nickname", "username", "password", "role", "image_path" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "image_path" varchar NOT NULL, CONSTRAINT "UQ_3021ae0235cf9c4a6d59663f859" UNIQUE ("username"))`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "nickname", "username", "password", "role", "image_path") SELECT "id", "nickname", "username", "password", "role", "image_path" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "nickname", "username", "password", "role", "image_path") SELECT "id", "nickname", "username", "password", "role", "image_path" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "image_path" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "nickname", "username", "password", "role", "image_path") SELECT "id", "nickname", "username", "password", "role", "image_path" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
