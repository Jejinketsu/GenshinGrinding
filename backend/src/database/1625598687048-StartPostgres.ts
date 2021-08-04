import {MigrationInterface, QueryRunner} from "typeorm";

export class StartPostgres1625598687048 implements MigrationInterface {
    name = 'StartPostgres1625598687048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dungeon" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_a0e09e42e58e4f30506bb32c3d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dungeon_to_item" ("dungeonToItemId" SERIAL NOT NULL, "dungeonId" integer NOT NULL, "itemId" integer NOT NULL, "day" character varying NOT NULL, CONSTRAINT "PK_17852bee9d6faefcc582c0f71da" PRIMARY KEY ("dungeonToItemId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nickname" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', "image_path" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_to_item" ("userToItemId" SERIAL NOT NULL, "userId" uuid NOT NULL, "itemId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_3eb2cc7b85368c28e4ceca4e44a" PRIMARY KEY ("userToItemId"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "tag" character varying, "rarity" integer NOT NULL, "description" character varying NOT NULL, "image_path" character varying NOT NULL, CONSTRAINT "UQ_c6ae12601fed4e2ee5019544ddf" UNIQUE ("name"), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "talent" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "level" integer NOT NULL, "image_path" character varying NOT NULL, "characterId" integer, CONSTRAINT "PK_bb69d9cea50aa835af369a4c2b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "element" character varying NOT NULL, "type_weapon" character varying NOT NULL, "image_path" character varying NOT NULL, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_characters_character" ("userId" uuid NOT NULL, "characterId" integer NOT NULL, CONSTRAINT "PK_c316c8d24a989b4e5969b1f2e8a" PRIMARY KEY ("userId", "characterId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4d057cc88bda2b0904c52e5caa" ON "user_characters_character" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cf3204b8ce361b6e18c98b1a8" ON "user_characters_character" ("characterId") `);
        await queryRunner.query(`CREATE TABLE "character_talent_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "PK_a2abb0aca6fd82ef456010f0e46" PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d5d9364a490fdcc057921d9c33" ON "character_talent_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_27a02a9fce48e961af891eab58" ON "character_talent_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE TABLE "character_xp_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "PK_4b176c42b51b677d2c7aa6ed6ea" PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59083e53dd6fabbaecb9ed5bbb" ON "character_xp_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3cd2d1609aec659f7455ee01b1" ON "character_xp_itens_item" ("itemId") `);
        await queryRunner.query(`CREATE TABLE "character_ascencion_itens_item" ("characterId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "PK_1cd0b6715c2346b2a3ab7bdef60" PRIMARY KEY ("characterId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8e0f1da364539bf9266285b6d7" ON "character_ascencion_itens_item" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_09940743caa6a76527e7922dc6" ON "character_ascencion_itens_item" ("itemId") `);
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" ADD CONSTRAINT "FK_60926da2171dbeb1c5a1108cf85" FOREIGN KEY ("dungeonId") REFERENCES "dungeon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" ADD CONSTRAINT "FK_b738bc33499a0d6a43cf17f3d76" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_to_item" ADD CONSTRAINT "FK_66e784eb437232c221443bc49c8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_to_item" ADD CONSTRAINT "FK_afdf6818f44e0dd74220b678052" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "talent" ADD CONSTRAINT "FK_95553313e84191fcc08114e6571" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_characters_character" ADD CONSTRAINT "FK_4d057cc88bda2b0904c52e5caaf" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_characters_character" ADD CONSTRAINT "FK_3cf3204b8ce361b6e18c98b1a8b" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_talent_itens_item" ADD CONSTRAINT "FK_d5d9364a490fdcc057921d9c338" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_talent_itens_item" ADD CONSTRAINT "FK_27a02a9fce48e961af891eab58c" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_xp_itens_item" ADD CONSTRAINT "FK_59083e53dd6fabbaecb9ed5bbbe" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_xp_itens_item" ADD CONSTRAINT "FK_3cd2d1609aec659f7455ee01b16" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_ascencion_itens_item" ADD CONSTRAINT "FK_8e0f1da364539bf9266285b6d7c" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_ascencion_itens_item" ADD CONSTRAINT "FK_09940743caa6a76527e7922dc63" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_ascencion_itens_item" DROP CONSTRAINT "FK_09940743caa6a76527e7922dc63"`);
        await queryRunner.query(`ALTER TABLE "character_ascencion_itens_item" DROP CONSTRAINT "FK_8e0f1da364539bf9266285b6d7c"`);
        await queryRunner.query(`ALTER TABLE "character_xp_itens_item" DROP CONSTRAINT "FK_3cd2d1609aec659f7455ee01b16"`);
        await queryRunner.query(`ALTER TABLE "character_xp_itens_item" DROP CONSTRAINT "FK_59083e53dd6fabbaecb9ed5bbbe"`);
        await queryRunner.query(`ALTER TABLE "character_talent_itens_item" DROP CONSTRAINT "FK_27a02a9fce48e961af891eab58c"`);
        await queryRunner.query(`ALTER TABLE "character_talent_itens_item" DROP CONSTRAINT "FK_d5d9364a490fdcc057921d9c338"`);
        await queryRunner.query(`ALTER TABLE "user_characters_character" DROP CONSTRAINT "FK_3cf3204b8ce361b6e18c98b1a8b"`);
        await queryRunner.query(`ALTER TABLE "user_characters_character" DROP CONSTRAINT "FK_4d057cc88bda2b0904c52e5caaf"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP CONSTRAINT "FK_95553313e84191fcc08114e6571"`);
        await queryRunner.query(`ALTER TABLE "user_to_item" DROP CONSTRAINT "FK_afdf6818f44e0dd74220b678052"`);
        await queryRunner.query(`ALTER TABLE "user_to_item" DROP CONSTRAINT "FK_66e784eb437232c221443bc49c8"`);
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" DROP CONSTRAINT "FK_b738bc33499a0d6a43cf17f3d76"`);
        await queryRunner.query(`ALTER TABLE "dungeon_to_item" DROP CONSTRAINT "FK_60926da2171dbeb1c5a1108cf85"`);
        await queryRunner.query(`DROP INDEX "IDX_09940743caa6a76527e7922dc6"`);
        await queryRunner.query(`DROP INDEX "IDX_8e0f1da364539bf9266285b6d7"`);
        await queryRunner.query(`DROP TABLE "character_ascencion_itens_item"`);
        await queryRunner.query(`DROP INDEX "IDX_3cd2d1609aec659f7455ee01b1"`);
        await queryRunner.query(`DROP INDEX "IDX_59083e53dd6fabbaecb9ed5bbb"`);
        await queryRunner.query(`DROP TABLE "character_xp_itens_item"`);
        await queryRunner.query(`DROP INDEX "IDX_27a02a9fce48e961af891eab58"`);
        await queryRunner.query(`DROP INDEX "IDX_d5d9364a490fdcc057921d9c33"`);
        await queryRunner.query(`DROP TABLE "character_talent_itens_item"`);
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
