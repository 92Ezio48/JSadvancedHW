import { nameEl } from './renderCommentsFunction.js'
import { commentEl } from './renderCommentsFunction.js'
import { buttonEl } from './renderCommentsFunction.js'
import { comments } from './commentsData.js'
import { replaceAllFunction } from './replaceAllFunction.js'
import { currentDate } from './renderCommentsFunction.js'
import { renderComments } from './renderCommentsFunction.js'
import { updateCommentsData } from './commentsData.js'
buttonEl.addEventListener('click', () => {
    if (nameEl.value.trim() === '') {
        alert('Имя пользователя не введено!')
        return
    }
    if (commentEl.value.trim() === '') {
        alert('Комментарий не введен!')
        return
    }
    const newComment = {
        author: {
            name: replaceAllFunction(nameEl.value),
        },
        date: currentDate,
        text: replaceAllFunction(commentEl.value),
        likes: 0,
        isLiked: false,
    }
    const sendData = () => {
        fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
            method: 'POST',
            body: JSON.stringify({
                text: newComment.text,
                name: newComment.author.name,
            }),
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                comments.push(newComment)
                renderComments()
            })
    }
    sendData()
    nameEl.value = ''
    commentEl.value = ''
    renderComments()
})
