import { usersRepository } from '../repositories/UsersRepository';
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import "dotenv/config"

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const user = await usersRepository.findOne({
      where: {
        email: email
      }
    })

    if(!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    //https://www.md5hashgenerator.com/
    const token = sign({
      email: user.email
    }, 
    process.env.TOKEN_SECRET_KEY, 
    {
      subject: user.id,
      expiresIn: "1d"
    })

    return token;
  }
}