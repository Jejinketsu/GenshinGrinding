import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import Roles from '../../config/roles';

export class UserTable1625683892725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'nickname',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'username',
                    type: 'string',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'role',
                    type: 'string',
                    enum: [Roles.Super, Roles.Admin, Roles.User],
                    default: Roles.User
                },
                {
                    name: 'image_path',
                    type: 'string'
                }
            ]
        }), true);

        await queryRunner.createForeignKeys("user", [
            new TableForeignKey({
                columnNames: ['characters'],
                referencedColumnNames: ['characterId'],
                referencedTableName: "",
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['inventory'],
                referencedColumnNames: ['userToItemId', 'userId','itemId'],
                referencedTableName: "user_to_item",
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user', true);
    }

}
