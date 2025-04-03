"use strict"; 
import {renderComments} from "./renderCommentsFunction.js";
export const nameEl = document.querySelector('.add-form-name');
export const commentEl = document.querySelector('.add-form-text');
export const buttonEl = document.querySelector('.add-form-button');
export const list = document.querySelector('.comments');
export let today = new Date();
export let day = String(today.getDate()).padStart(2, '0');
export let month = String(today.getMonth() + 1).padStart(2, '0');
export let year = today.getFullYear().toString().substr(2,2);
export let hours = String(today.getHours()).padStart(2, '0');
export let minutes = String(today.getMinutes()).padStart(2, '0');
export let currentDate = `${day}.${month}.${year} ${hours}:${minutes}`;
export const commentLikes = document.querySelectorAll('.like-button');
export const commentFormsEl = document.querySelectorAll('.comment');

renderComments();

