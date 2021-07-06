export default [
    {
        "name": "production",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": process.env.TYPEORM_PASSWORD,
        "database": "genshin-database",
        "migrations":[
            "./src/database/migrations/*.ts"
        ],
        "entities":[
            "./src/models/*.ts"
        ],
        "cli": {
            "migrationsDir": "./src/database/migrations/"
        },
        "synchronize": false
    },
    {
        "name": "default",
        "type": "sqlite",
        "database": "./src/datebase/datebase.sqlite",
        "migrations":[
            "./src/database/migrations/*.ts"
        ],
        "entities":[
            "./src/models/*.ts"
        ],
        "cli": {
            "migrationsDir": "./src/database/migrations/"
        },
        "synchronize": false
    }
]


