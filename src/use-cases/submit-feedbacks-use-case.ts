import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface IFeedbacksRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbacksUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}
  async execute({ comment, type, screenshot }: IFeedbacksRequest) {
    await this.feedbacksRepository.create({ comment, type, screenshot });   
  }
}