import { nameEl } from './renderCommentsFunction.js'
import { commentEl } from './renderCommentsFunction.js'
import { buttonEl } from './renderCommentsFunction.js'
import { loadernewCommentEl } from './renderCommentsFunction.js'
import { comments } from './commentsData.js'
import { replaceAllFunction } from './replaceAllFunction.js'
import { renderComments } from './renderCommentsFunction.js'
import { getData } from './index.js'
import { getDataFirst } from './index.js'
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
        date: new Date().toISOString(),
        text: replaceAllFunction(commentEl.value),
        likes: 0,
        isLiked: false,
    }

    const sendData = () => {
        loadernewCommentEl.classList.remove('hidden')
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
                loadernewCommentEl.classList.add('hidden')
                getData()
            })
    }
    sendData()
    nameEl.value = ''
    commentEl.value = ''
    renderComments()
})
