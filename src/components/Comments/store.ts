import type { CommentItem } from "@src/utils/types";
import { createStore, produce } from "solid-js/store";

interface Store {
  comments: CommentItem[];
  commentsIdMapped: Record<string, CommentItem>;
  postId: number;
}

export const [commentsStore, setCommentsStore] = createStore<Store>({
  comments: [],
  commentsIdMapped: {},
  postId: 0,
});

export const setPostId = (postId: number) => {
  setCommentsStore("postId", postId);
};

export const setStoreComments = (comments: CommentItem[]) => {
  setCommentsStore("comments", comments);
  setCommentsStore("commentsIdMapped", getIdMappedComments(comments));
};

export const addCommentToStore = (comment: CommentItem) => {
  if (Number(comment.parent_id)) {
    setCommentsStore(
      "comments",
      produce((prev) => {
        const parentComment = findComment(prev, comment.parent_id);
        if (parentComment) {
          if (!parentComment.children) {
            parentComment.children = [];
          } else {
            parentComment.children.push(comment);
          }
        }
      })
    );
    setCommentsStore("commentsIdMapped", (prev) => ({
      ...prev,
      [comment.id]: comment,
    }));
  } else {
    setCommentsStore("comments", [...commentsStore.comments, comment]);
    setCommentsStore("commentsIdMapped", {
      ...commentsStore.commentsIdMapped,
      [comment.id]: comment,
    });
  }
};

const findComment = (
  comments: CommentItem[],
  targetId: string
): CommentItem | null => {
  for (const comment of comments) {
    if (comment.id === targetId) {
      return comment;
    }
    if (comment.children) {
      const found = findComment(comment.children, targetId);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

const getIdMappedComments = (comments: CommentItem[]) => {
  const commentsIdMapped: Record<string, CommentItem> = {};

  const traverseComments = (comments: CommentItem[]) => {
    comments.forEach((comment) => {
      commentsIdMapped[comment.id] = comment;
      if (comment.children?.length) {
        traverseComments(comment.children);
      }
    });
  };

  traverseComments(comments);

  return commentsIdMapped;
};
