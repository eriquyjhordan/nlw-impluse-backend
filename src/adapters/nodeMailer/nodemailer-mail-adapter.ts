import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


export class NodeMailerMailAdapter implements MailAdapter {
  async send({ body, subject }: SendMailData): Promise<void> {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "39724364b237b1",
        pass: "af42f1b92a4620"
      }
    });

    transport.sendMail({
      from: '"Feedback" <noreplay@feedbacks.com>',
      to: 'eriquy@gmail.com',
      subject,
      html: body
    }, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }

}