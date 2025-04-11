import { comments } from './commentsData.js'
import { updateCommentsData } from './commentsData.js'
export const answerFormClick = () => {
    const commentFormsEl = document.querySelectorAll('.comment')
    for (const commentFormEl of commentFormsEl) {
        commentFormEl.addEventListener('click', () => {
            const index = event.currentTarget.getAttribute('data-index')
            const comment = updateCommentsData[index]
            document.querySelector('.add-form-text').value =
                comment.name + ` : ${comment.text}  `
        })
    }
}
