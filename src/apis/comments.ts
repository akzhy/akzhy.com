import { api } from "@src/utils/api";
import type { CommentItem } from "@src/utils/types";

interface ListCommentsResponse {
  data: CommentItem[];
}

interface AddCommentBody {
  name: string;
  email: string;
  parent: string;
  post: number;
  comment: string;
  subscribe: boolean;
  captchaToken: string;
}

interface AddCommentResponse {
  data: CommentItem;
}

export const listComments = (id: number) => {
  return api
    .post<ListCommentsResponse>("restcomments/v1/list", { json: { id } })
    .json();
};

export const addComment = (data: AddCommentBody) => {
  return api
    .post<AddCommentResponse>("restcomments/v1/add", { json: data })
    .json();
};
