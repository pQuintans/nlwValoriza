import { tagsRepository } from '../repositories/TagsRepository';
import { instanceToPlain } from 'class-transformer';

export class ListTagsService {
  async execute() {
    // let tags = await tagsRepository.find()
    // tags = tags.map(tag => (
    //   { ...tag, name_custom: `#${tag.name}`}
    // ))
    const tags = await tagsRepository.find()

    return instanceToPlain(tags)
  }
}