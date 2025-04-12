import { comments } from "./commentsData.js";
import { renderComments } from "./renderCommentsFunction.js";
export const btnlikeClick = () => {
  const commentLikes = document.querySelectorAll(".like-button");
  for (const commentLike of commentLikes) {
    commentLike.addEventListener("click", (event) => {
      event.stopPropagation();

      const index = Array.from(commentLikes).indexOf(commentLike);
      comments[index].isLiked = !comments[index].isLiked;
      comments[index].likes += comments[index].isLiked ? 1 : -1;

      renderComments();
    });
  }
};
