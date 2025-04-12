import { nameEl } from './renderCommentsFunction.js'
import { commentEl } from './renderCommentsFunction.js'
import { buttonEl } from './renderCommentsFunction.js'
import { comments } from './commentsData.js'
import { replaceAllFunction } from './replaceAllFunction.js'
import { currentDate } from './renderCommentsFunction.js'
import { renderComments } from './renderCommentsFunction.js'
import { updateCommentsData } from './commentsData.js'
export const newComment = {
    author: {
        name: replaceAllFunction(nameEl.value),
    },
    date: currentDate,
    text: replaceAllFunction(commentEl.value),
    likes: 0,
    isLiked: false,
}
buttonEl.addEventListener('click', () => {
    if (nameEl.value === '') {
        alert('Имя пользователя не введено!')
        return
    }
    if (commentEl.value === '') {
        alert('Комментарий не введен!')
        return
    }

    fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateCommentsData(data.comments)
            renderComments()
        })
    nameEl.value = ''
    commentEl.value = ''
    renderComments()
})
