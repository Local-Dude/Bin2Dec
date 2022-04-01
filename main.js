let input = document.querySelector('.input')
let btn = document.querySelector('button')
let h3 = document.querySelector('h3')
let span = document.querySelector('span')
let arr = ['2', '3', '4', '5', '6', '7', '8', '9']


btn.addEventListener('click', ()=> {
   if([...new Set(input.value.split(''))].filter(item => arr.includes(item)).length > 0) {
    h3.classList.remove('hide')
} else {
    h3.classList.add('hide')
    span.textContent = parseInt(input.value, 2)
}
})
