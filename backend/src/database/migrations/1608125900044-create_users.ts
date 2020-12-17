import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1608125900044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
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
                    name: 'username',
                    type: 'varchar',

                },
                {
                    name: 'nickname',
                    type: 'varchar',
                },
                {
                    name:'password',
                    type:'varchar'
                },
                {
                    name: 'character_id',
                    type: 'integer'
                },
                {
                    name: 'inventory_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'CharacterUser',
                    columnNames: ['character_id'],
                    referencedTableName: 'characters',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'//Se eu deletar o usuário, deleta a imagem também
                },
                {
                    name: 'InventoryUser',
                    columnNames: ['inventory_id'],
                    referencedTableName: 'itens',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
