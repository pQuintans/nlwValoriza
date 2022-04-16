import { complimentsRepository } from '../repositories/ComplimentsRepository';

export class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    })

    return compliments
  }
}