export type LetterPost = {
  title: string;
  body: string;
  email?: string;
};

export type LetterPublic = {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  approved: boolean;
};
