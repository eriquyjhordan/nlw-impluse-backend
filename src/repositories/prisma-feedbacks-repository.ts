import prisma from "../prisma";
import { FeedbacksCreateInput, FeedbacksRepository } from "./feedbacks-repository";

export default class PrismaFeedBacksRepository implements FeedbacksRepository {
  async create({ comment, type, screenshot }: FeedbacksCreateInput) {
    await prisma.feedBack.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }

}