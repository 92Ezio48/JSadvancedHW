import { renderComments } from './renderCommentsFunction.js'
import { getComments } from './api.js'
import { updateCommentsData } from './commentsData.js'

export const fetchandRenderComments = () => {
    return getComments().then((data) => {
        updateCommentsData(data.comments)
        renderComments()
    })
}
