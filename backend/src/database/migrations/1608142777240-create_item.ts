import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItem1608142777240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "itens",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',

                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'rarity',
                    type: 'integer'
                },
                {
                    name: 'description',
                    type: 'varchar'
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('itens');
    }

}
