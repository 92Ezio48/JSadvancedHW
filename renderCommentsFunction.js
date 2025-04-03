import { list } from "./index.js";
import { comments } from "./commentsData.js";
import { btnlikeClick } from "./likeBtn.js";
import { answerFormClick } from "./answerFormClick.js";

export const renderComments = () => {
  const commentsHtml = comments
    .map((comment, like) => {
      const buttonClass = comment.likeActive
        ? "like-button -active-like"
        : "like-button";
      return `<li data-index="${like}" class="comment">
        <div class="comment-header">
          <div data-name="${comment.name}">${comment.name}</div>
          <div>${comment.time}</div>
        </div>
        <div class="comment-body">
          <div data-text="${comment.text}" class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likesCounter}</span>
            <button data-like="${like}" class="${buttonClass}"></button>
          </div>
        </div>
      </li>`;
    })
    .join("");
  list.innerHTML = commentsHtml;

  btnlikeClick();
  answerFormClick();
};
