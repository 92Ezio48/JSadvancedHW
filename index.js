'use strict'
import { renderComments } from './renderCommentsFunction.js'
import { updateCommentsData } from './commentsData.js'

export const getData = () => {
    fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
        method: 'GET',
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateCommentsData(data.comments)
            renderComments()
        })
}
getData()
