export const nameEl = document.querySelector('.add-form-name')
export const commentEl = document.querySelector('.add-form-text')
export const buttonEl = document.querySelector('.add-form-button')
export const list = document.querySelector('.comments')
export const loaderEl = document.querySelector('.loader')
export const loadernewCommentEl = document.querySelector('.loader-newComment')
export let today = new Date()
export let day = String(today.getDate()).padStart(2, '0')
export let month = String(today.getMonth() + 1).padStart(2, '0')
export let year = today.getFullYear().toString().substr(2, 2)
export let hours = String(today.getHours()).padStart(2, '0')
export let minutes = String(today.getMinutes()).padStart(2, '0')
export let currentDate = `${day}.${month}.${year} ${hours}:${minutes}`
export const commentFormsEl = document.querySelectorAll('.comment')
import { comments } from './commentsData.js'
import { btnlikeClick } from './likeBtn.js'
import { answerFormClick } from './answerFormClick.js'
export const renderComments = () => {
    if (Array.isArray(comments)) {
        const commentsHtml = comments

            .map((comment, like) => {
                const date = new Date(comment.date)
                const formattedDate = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')} ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear().toString().substr(0, 4)}`
                const buttonClass = comment.isLiked
                    ? 'like-button -active-like'
                    : 'like-button'
                return `<li data-index="${like}" class="comment">
        <div class="comment-header">
          <div data-name="${comment.author.name}">${comment.author.name}</div>
          <div>${formattedDate}</div>
        </div>
        <div class="comment-body">
          <div data-text="${comment.text}" class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-like="${like}" class="${buttonClass}"></button>
          </div>
        </div>
      </li>`
            })
            .join('')
        list.innerHTML = commentsHtml

        btnlikeClick()
        answerFormClick()
    }
}
