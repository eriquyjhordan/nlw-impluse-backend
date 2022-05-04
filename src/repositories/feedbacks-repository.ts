export interface FeedbacksCreateInput {
  type: string;
  comment: string;
  screenshot?: string;
}


export interface FeedbacksRepository {
  create: (data: FeedbacksCreateInput) => Promise<void>;
}