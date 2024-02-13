'use strict';
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input');
const userMessage = document.querySelector('textarea');

form.addEventListener('input', onInputForm);

function onInputForm(event) {
  event.preventDefault();
  const userInfo = {
    email: userEmail.value.trim(),
    message: userMessage.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userInfo));
}

const rawData = localStorage.getItem(localStorageKey);
if (rawData) {
  const data = JSON.parse(rawData);
  userEmail.value = data.email;
  userMessage.value = data.message;
}

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  const email = userEmail.value.trim();
  const message = userMessage.value.trim();
  if (email === '' || message === '') {
    return;
  }
  const userInfo = {
    email: userEmail.value.trim(),
    message: userMessage.value.trim(),
  };
  console.log(userInfo);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
