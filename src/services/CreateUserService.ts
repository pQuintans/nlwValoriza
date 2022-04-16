import { usersRepository } from '../repositories/UsersRepository';
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    if(!email) {
      throw new Error("Incorrect email")
    }

    const userAlreadyExists = await usersRepository.findOne({
      where: {
        email: email
      }
    })

    if(userAlreadyExists) {
      throw new Error("User already exists");      
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    })

    await usersRepository.save(user)

    return user
  }
}