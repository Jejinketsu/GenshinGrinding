export default [
    {
        "name": "default",
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
]


