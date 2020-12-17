import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1608155290410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
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
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'integer'
                },
                {
                    name: 'character_id',
                    type: 'integer'
                },
                {
                    name: 'item_id',
                    type: 'integer'
                },
                {
                    name: 'talent_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'//Se eu deletar o usuário, deleta a imagem também
                },
                {
                    name: 'ImageCharacter',
                    columnNames: ['character_id'],
                    referencedTableName: 'characters',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'
                },
                {
                    name: 'ImageItem',
                    columnNames: ['item_id'],
                    referencedTableName: 'itens',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'
                },
                {
                    name: 'ImageTalent',
                    columnNames: ['talent_id'],
                    referencedTableName: 'talents',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
