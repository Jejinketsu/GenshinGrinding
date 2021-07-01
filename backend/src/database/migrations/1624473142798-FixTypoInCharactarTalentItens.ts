import {MigrationInterface, QueryRunner} from "typeorm";

export class FixTypoInCharactarTalentItens1624473142798 implements MigrationInterface {
    name = 'FixTypoInCharactarTalentItens1624473142798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "character_talent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d5d9364a490fdcc057921d9c33" ON "character_talent_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_27a02a9fce48e961af891eab58" ON "character_talent_itens_item" ("itemId") `);
        await queryRunner.query(`DROP INDEX "IDX_d5d9364a490fdcc057921d9c33"`);
        await queryRunner.query(`DROP INDEX "IDX_27a02a9fce48e961af891eab58"`);
        await queryRunner.query(`CREATE TABLE "temporary_character_talent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "FK_d5d9364a490fdcc057921d9c338" FOREIGN KEY ("characterId") REFERENCES "character" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_27a02a9fce48e961af891eab58c" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "temporary_character_talent_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "character_talent_itens_item"`);
        await queryRunner.query(`DROP TABLE "character_talent_itens_item"`);
        await queryRunner.query(`ALTER TABLE "temporary_character_talent_itens_item" RENAME TO "character_talent_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_d5d9364a490fdcc057921d9c33" ON "character_talent_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_27a02a9fce48e961af891eab58" ON "character_talent_itens_item" ("itemId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_27a02a9fce48e961af891eab58"`);
        await queryRunner.query(`DROP INDEX "IDX_d5d9364a490fdcc057921d9c33"`);
        await queryRunner.query(`ALTER TABLE "character_talent_itens_item" RENAME TO "temporary_character_talent_itens_item"`);
        await queryRunner.query(`CREATE TABLE "character_talent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`INSERT INTO "character_talent_itens_item"("characterId", "itemId") SELECT "characterId", "itemId" FROM "temporary_character_talent_itens_item"`);
        await queryRunner.query(`DROP TABLE "temporary_character_talent_itens_item"`);
        await queryRunner.query(`CREATE INDEX "IDX_27a02a9fce48e961af891eab58" ON "character_talent_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d5d9364a490fdcc057921d9c33" ON "character_talent_itens_item" ("characterId") `);
        await queryRunner.query(`DROP INDEX "IDX_27a02a9fce48e961af891eab58"`);
        await queryRunner.query(`DROP INDEX "IDX_d5d9364a490fdcc057921d9c33"`);
        await queryRunner.query(`DROP TABLE "character_talent_itens_item"`);
    }

}
