import { nameEl } from './renderCommentsFunction.js'
import { commentEl } from './renderCommentsFunction.js'
import { buttonEl } from './renderCommentsFunction.js'
import { comments } from './commentsData.js'
import { replaceAllFunction } from './replaceAllFunction.js'
import { currentDate } from './renderCommentsFunction.js'
import { renderComments } from './renderCommentsFunction.js'
buttonEl.addEventListener('click', () => {
    if (nameEl.value === '') {
        alert('Имя пользователя не введено!')
        return
    }
    if (commentEl.value === '') {
        alert('Комментарий не введен!')
        return
    }

    comments.push({
        name: replaceAllFunction(nameEl.value),
        time: currentDate,
        text: replaceAllFunction(commentEl.value),
        likesCounter: 0,
        likeActive: false,
    })
    nameEl.value = ''
    commentEl.value = ''
    renderComments()
})
