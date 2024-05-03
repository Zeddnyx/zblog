export interface IQuery {
  limit?: number;
  page?: number;
  search?: string;
  date?: string;
  code?: string;
  type?: string;
}

export interface IBlog {
  id?: string;
  title: string;
  content: string;
  category: string;
  comments?: number;
  date?: string;
  slug?: string;
}
export interface IComment {
  id?: string;
  articleId?: string;
  content: string;
  email: string;
  name: string;
  date?: string;
}
