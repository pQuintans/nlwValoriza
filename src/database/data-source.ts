import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sqlite',
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/entities/*.ts"]
})

export default AppDataSource