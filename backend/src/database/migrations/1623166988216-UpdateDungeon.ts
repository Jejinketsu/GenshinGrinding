import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateDungeon1623166988216 implements MigrationInterface {
    name = 'UpdateDungeon1623166988216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_dungeon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "location" varchar NOT NULL, "type" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_dungeon"("id", "name") SELECT "id", "name" FROM "dungeon"`);
        await queryRunner.query(`DROP TABLE "dungeon"`);
        await queryRunner.query(`ALTER TABLE "temporary_dungeon" RENAME TO "dungeon"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dungeon" RENAME TO "temporary_dungeon"`);
        await queryRunner.query(`CREATE TABLE "dungeon" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "dungeon"("id", "name") SELECT "id", "name" FROM "temporary_dungeon"`);
        await queryRunner.query(`DROP TABLE "temporary_dungeon"`);
    }

}
