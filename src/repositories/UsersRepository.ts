import AppDataSource from '../database/data-source'
import { User } from '../entities/User'

export const usersRepository = AppDataSource.getRepository(User)