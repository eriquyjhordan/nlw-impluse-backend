import { Request, Response } from 'express'

import { SubmitFeedbacksUseCase } from './../use-cases/submit-feedbacks-use-case';
import PrismaFeedBacksRepository from "../repositories/prisma-feedbacks-repository";
import { NodeMailerMailAdapter } from '../adapters/nodeMailer/nodemailer-mail-adapter';

export const feedBacksController = {
  store: async (request: Request, response: Response) => {
    const { type, comment, screenshot } = request.body;
    const prismaRepository = new PrismaFeedBacksRepository();
    const submitFeedbacksUseCase = new SubmitFeedbacksUseCase(prismaRepository);
    await submitFeedbacksUseCase.execute({ type, comment, screenshot });
    const sendMail = new NodeMailerMailAdapter();
    await sendMail.send({
      subject: 'Feedback',
      body: [
        `<div style="font-size: 16px; font-family: sans-serif; color: #121010">`,
        `<h1>New Feedback</h1>`,
        `<p>Type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        `<p>Screenshot: ${screenshot}</p>`,
        `</div>`,
      ].join('\n'),
    });
    response.status(201).send();
  }
}

