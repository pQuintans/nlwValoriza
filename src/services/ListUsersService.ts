import { usersRepository } from '../repositories/UsersRepository';
import { instanceToPlain } from 'class-transformer';

export class ListUsersService {
  async execute() {
    const users = await usersRepository.find();

    return instanceToPlain(users)
  }
}