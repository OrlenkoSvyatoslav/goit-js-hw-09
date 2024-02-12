'use strict';
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const userEmail = form.elements.email;
const userMessege = form.elements.message;

form.addEventListener('input', onInputForm);

function onInputForm(event) {
  event.preventDefault();
  const userInfo = {
    email: userEmail.value.trim(),
    massege: userMessege.value.trim(),
  };
  localStorage.setItem('localStorageKey', JSON.stringify(userInfo));
}

const rawData = localStorage.getItem(localStorageKey);
if (rawData) {
  const data = JSON.parse(rawData);
  userEmail.value = data.email;
  userMessege.value = data.message;
}

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  if (userEmail.value === '' || userMessege.value === '') {
    return;
  }
  const userInfo = {
    email: userEmail.value.trim(),
    massege: userMessege.value.trim(),
  };
  console.log(userInfo);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
