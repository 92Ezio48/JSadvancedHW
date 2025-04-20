'use strict'
import { renderComments } from './renderCommentsFunction.js'
import { updateCommentsData } from './commentsData.js'
import { loaderEl } from './renderCommentsFunction.js'
export const getDataFirst = () => {
    loaderEl.classList.remove('hidden')
    fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
        method: 'GET',
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateCommentsData(data.comments)
            loaderEl.classList.add('hidden')
            renderComments()
        })
}
getDataFirst()
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
