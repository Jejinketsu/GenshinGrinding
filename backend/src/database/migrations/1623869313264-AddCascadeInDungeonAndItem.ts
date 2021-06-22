import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCascadeInDungeonAndItem1623869313264 implements MigrationInterface {
    name = 'AddCascadeInDungeonAndItem1623869313264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_dungeon_to_item"("dungeonToItemId", "dungeonId", "itemId", "day") SELECT "dungeonToItemId", "dungeonId", "itemId", "day" FROM "dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "dungeon_to_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_dungeon_to_item" RENAME TO "dungeon_to_item"`);
        await queryRunner.query(`CREATE TABLE "temporary_dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL, CONSTRAINT "FK_60926da2171dbeb1c5a1108cf85" FOREIGN KEY ("dungeonId") REFERENCES "dungeon" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b738bc33499a0d6a43cf17f3d76" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_dungeon_to_item"("dungeonToItemId", "dungeonId", "itemId", "day") SELECT "dungeonToItemId", "dungeonId", "itemId", "day" FROM "dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "dungeon_to_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_dungeon_to_item" RENAME TO "dungeon_to_item"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" RENAME TO "temporary_dungeon_to_item"`);
        await queryRunner.query(`CREATE TABLE "dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "dungeon_to_item"("dungeonToItemId", "dungeonId", "itemId", "day") SELECT "dungeonToItemId", "dungeonId", "itemId", "day" FROM "temporary_dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "temporary_dungeon_to_item"`);
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" RENAME TO "temporary_dungeon_to_item"`);
        await queryRunner.query(`CREATE TABLE "dungeon_to_item" ("dungeonToItemId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" varchar NOT NULL, CONSTRAINT "FK_b738bc33499a0d6a43cf17f3d76" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_60926da2171dbeb1c5a1108cf85" FOREIGN KEY ("dungeonId") REFERENCES "dungeon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "dungeon_to_item"("dungeonToItemId", "dungeonId", "itemId", "day") SELECT "dungeonToItemId", "dungeonId", "itemId", "day" FROM "temporary_dungeon_to_item"`);
        await queryRunner.query(`DROP TABLE "temporary_dungeon_to_item"`);
    }

}
