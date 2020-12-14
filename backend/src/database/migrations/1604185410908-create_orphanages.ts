import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users", 
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary:true,
                    isGenerated:true, 
                    generationStrategy:'increment'
                },
                {
                    name: 'nick_name',
                    type: '',

                },
                {
                    name: 'user_name',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'characters',
                    type: 'varchar',
                },
                {
                    name: 'inventory',
                    type: 'varchar',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolen',
                    default: false
                }
            ],           
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages')
    }

}

//O método up serve para realizar operações no banco de dados. CRUD
//Desfazer alguma operação que o método up fez