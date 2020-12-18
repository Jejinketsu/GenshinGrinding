import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCharacters1608143811826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "characters",
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
                    name: 'element',
                    type: 'varchar',
                },
                {
                    name: 'type_weapon',
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'item_leveling_id',
                    type: 'integer'
                },
                {
                    name: 'xp_id',
                    type: 'integer'
                },
                {
                    name: 'talent_id',
                    type: 'integer'
                },
                
            ],
            foreignKeys: [
                {
                    name: 'ItemLevelingCharacter',
                    columnNames: ['item_leveling_id'],
                    referencedTableName: 'itens',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'//Se eu deletar o usuário, deleta a imagem também
                },
                {
                    name: 'XPCharacter',
                    columnNames: ['xp_id'],
                    referencedTableName: 'itens',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //altera o id de forma automatica
                    onDelete: 'CASCADE'
                },
                {
                    name: 'TalentCharacter',
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
        await queryRunner.dropTable('characters');
    }

}
