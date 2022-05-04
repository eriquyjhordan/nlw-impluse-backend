export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  send(mail: SendMailData): Promise<void>;
}