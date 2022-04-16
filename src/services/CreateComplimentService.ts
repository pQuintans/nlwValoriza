import { complimentsRepository } from '../repositories/ComplimentsRepository';
import { usersRepository } from '../repositories/UsersRepository';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    if(user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver!");
    }

    const userReceiverExists = await usersRepository.findOne({
      where: {
        id: user_receiver
      }
    })

    if(!userReceiverExists) {
      throw new Error("User Receiver does not exists!");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}