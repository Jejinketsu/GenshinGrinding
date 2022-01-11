import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class UserToItemTable1625686651874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user_to_item',
            columns: [
                {
                    name: 'userToItemId',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'userId',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'itemId',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'quantity',
                    type: 'int',
                    default: 0
                }
            ]
        }));

        await queryRunner.createForeignKeys("user_to_item", [
            new TableForeignKey({
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'user',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['item'],
                referencedColumnNames: ['id'],
                referencedTableName: 'item',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_to_item");
    }

}
