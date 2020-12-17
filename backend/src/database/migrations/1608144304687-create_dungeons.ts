import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDungeons1608144304687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "dungeons",
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
                    name: 'day',
                    type: 'date',
                },
                {
                    name: 'item_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    name: 'ItemDungeon',
                    columnNames: ['item_id'],
                    referencedTableName: 'itens',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'//Se eu deletar o usuário, deleta a imagem também
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dungeons');
    }

}
