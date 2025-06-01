'use strict'
import { renderComments } from './renderCommentsFunction.js'
import { updateCommentsData } from './commentsData.js'
import { loaderEl } from './renderCommentsFunction.js'
import { renderLogin } from './renderLogin.js'
import { token } from './api.js'
export const getDataFirst = () => {
    loaderEl.classList.remove('hidden')
    fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
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
    return fetch('https://wedev-api.sky.pro/api/v1/V-Korolyov/comments', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateCommentsData(data.comments)
            renderComments()
        })
}
renderLogin()

// export const getUsers = () => {
//     fetch('https://wedev-api.sky.pro/api/user', {
//         method: 'GET',
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data.users)
//         })
//         .catch((error) => console.error('Ошибка:', error))
// }

// getUsers()
