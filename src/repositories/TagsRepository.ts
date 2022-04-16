import AppDataSource from '../database/data-source'
import { Tag } from '../entities/Tag'

export const tagsRepository = AppDataSource.getRepository(Tag)