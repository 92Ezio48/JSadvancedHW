import { login } from './api.js'
import { fetchandRenderComments } from './fetchandRenderComments.js'
import { updatetoken } from './api.js'
export const renderLogin = () => {
    const app = document.getElementById('app')

    app.innerHTML = `<h1>Страница входа</h1>
<div class="add-form">
    <h3 class="comment-text">Форма входа</h3>
    <div class="form-row">
        <input type="text" id="login-input" class="add-form-name add-form-name_login" placeholder="Логин" />
        <input
            type="text"
            id="password-input"
            class="add-form-name"
            placeholder="Пароль"
        />
    </div>
    <br />
    <button class="add-form-button" id="login-button">Войти</button>
    <button class="add-form-button" id="reg-button">Зарегистрироваться</button>
</div>`

    const button = document.getElementById('login-button')
    const loginEl = document.getElementById('login-input')
    const passwordEl = document.getElementById('password-input')

    button.addEventListener('click', () => {
        login({
            login: loginEl.value,
            password: passwordEl.value,
        }).then((responseData) => {
            console.log('Response Data:', responseData)
            console.log(responseData.user.token)
            updatetoken(responseData.user.token)
            console.log(responseData.user.token)
            fetchandRenderComments()
            console.log(responseData.user.token)
        })
    })
}
