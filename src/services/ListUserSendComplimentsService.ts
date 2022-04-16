import { complimentsRepository } from '../repositories/ComplimentsRepository';

export class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
      }
    })

    return compliments
  }
}