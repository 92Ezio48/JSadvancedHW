const host = 'https://wedev-api.sky.pro/api/v2/V-Korolyov/comments'
import { replaceAllFunction } from './replaceAllFunction.js'
import { nameEl } from './renderCommentsFunction.js'
import { commentEl } from './renderCommentsFunction.js'
import { createFormEl } from './createCommentBtn.js'
import { loadernewCommentEl } from './renderCommentsFunction.js'
import { authToken } from './createCommentBtn.js'
export let token = ''
export let updatetoken = (newToken) => {
    token = newToken
}

export function getComments() {
    return fetch(host, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        return response.json()
    })
}

export function deleteComments({ id }) {
    return fetch(`${host}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        return response.json()
    })
}

export function postComments({ token, text }) {
    const data = JSON.stringify({
        text: commentEl.value,
        token: `Bearer ${token}`,
    })
    console.log('Отправляемый токен:', token)
    console.log('Отправляемые данные:', data)
    return fetch(`https://wedev-api.sky.pro/api/v2/V-Korolyov/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: data,
    }).then((response) => {
        return response.json()
    })
}

export function login({ login, password }) {
    return fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    })
        .then((response) => {
            console.log('Fetch вернул промис, и это первый then')
            if (response.status === 201) {
                return response.json()
            } else {
                if (response.status === 500) {
                    throw new Error('Сервер упал')
                }
                if (response.status === 400) {
                    throw new Error('Неправильный запрос')
                }
                throw new Error('Что-то пошло не так')
            }
        })
        .catch((Error) => {
            alert(Error)
            createFormEl.classList.remove('hidden')
            loadernewCommentEl.classList.add('hidden')
        })
}
export function registration(login, name, password) {
    createFormEl.classList.add('hidden')
    loadernewCommentEl.classList.remove('hidden')
    fetch(`${regToken}`, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
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
