const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
});

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus