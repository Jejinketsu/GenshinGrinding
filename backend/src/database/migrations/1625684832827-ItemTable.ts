import tag_item from "../../config/tag_item";
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import item_type from '../../config/item_type';

export class ItemTable1625684832827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'item',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'string',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'type',
                    type: 'string',
                    enum: [
                        item_type.Character_Ascension_Material,
                        item_type.Character_EXP_Material,
                        item_type.Commom_Ascension_Material,
                        item_type.Local_Specialties,
                        item_type.Talent_LevelUp_Material,
                        item_type.Weapon_Ascension_Material
                    ],
                    isNullable: false
                },
                {
                    name: 'tag',
                    type: 'string',
                    enum: [
                        tag_item.book,
                        tag_item.boss_item,
                        tag_item.event,
                        tag_item.level,
                        tag_item.local,
                        tag_item.stone,
                        tag_item.world
                    ],
                    isNullable: true
                },
                {
                    name: 'rarity',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'string',
                    isNullable: false
                }
            ]
        }), true);

        await queryRunner.createForeignKeys("item", [
            new TableForeignKey({
                columnNames: ['dungeonToItem'],
                referencedColumnNames: ['dungeonToItemId'],
                referencedTableName: '',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }),
            new TableForeignKey({
                columnNames: ['userToItem'],
                referencedColumnNames: ['userToItemId'],
                referencedTableName: 'user_to_item',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        ])}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("item", true);
    }

}
