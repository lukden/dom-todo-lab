// // console.log('sanity check')

const inputElement = document.querySelector("#new-input")
const btn = document.querySelector("#submit-button")
const ulEl = document.querySelector("#todo-list")

btn.addEventListener('click', function(event) {
  if(inputElement.value === '') return
  const newLi = document.createElement('li')
  newLi.textContent = inputElement.value
  ulEl.appendChild(newLi)
  inputElement.value = ''
})



