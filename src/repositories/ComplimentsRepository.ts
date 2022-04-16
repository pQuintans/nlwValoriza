import AppDataSource from '../database/data-source'
import { Compliment } from '../entities/Compliment'

export const complimentsRepository = AppDataSource.getRepository(Compliment)