export const createFormEl = document.querySelector('.add-form')
import { nameEl } from './renderCommentsFunction.js'
import { commentEl } from './renderCommentsFunction.js'
import { buttonEl } from './renderCommentsFunction.js'
import { loadernewCommentEl } from './renderCommentsFunction.js'
import { replaceAllFunction } from './replaceAllFunction.js'
import { renderComments } from './renderCommentsFunction.js'
import { getData } from './index.js'
import { getDataFirst } from './index.js'
buttonEl.addEventListener('click', () => {
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
        createFormEl.classList.add('hidden')
        loadernewCommentEl.classList.remove('hidden')
        fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
            method: 'POST',
            body: JSON.stringify({
                text: newComment.text,
                name: newComment.author.name,
                forceError: true,
            }),
        })
            .then((response) => {
                if (response.status === 201) {
                    return response.json()
                } else {
                    if (response.status === 500) {
                        throw new Error('Сервер упал')
                    }
                    if (response.status === 400) {
                        throw new Error(
                            'Имя и комментарий должны быть не короче 3-х символов',
                        )
                    }
                    throw new Error('Что-то пошло не так')
                }
            })
            .then((data) => {
                getData()
                createFormEl.classList.remove('hidden')
                loadernewCommentEl.classList.add('hidden')
                nameEl.value = ''
                commentEl.value = ''
            })
            .catch((Error) => {
                alert(Error)
                createFormEl.classList.remove('hidden')
                loadernewCommentEl.classList.add('hidden')
            })
    }
    sendData()

    renderComments()
})
