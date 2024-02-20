// let elem = document.querySelector('.example')

// console.log(elem.offsetTop)
// console.log(elem.offsetLeft)

// console.log(elem.clientTop)
// console.log(elem.clientLeft)

// console.log(elem.offsetWidth)
// console.log(elem.clientWidth)

// console.log(elem.clientHeight)
// console.log(elem.offsetHeight)

// console.log(elem.scrollTop)
// console.log(elem.scrollHeight)

// console.log(elem.offsetParent)

// console.log(elem.offsetWidth-elem.clientWidth-elem.clientLeft*2)

// elem.style.height = elem.scrollHeight + 'px'

// console.log(document.documentElement.clientHeight)

// console.log(document.documentElement.clientWidth)


// console.log(window.pageXOffset)
// elem.scrollTo(0,50)
// elem.scrollBy(0,100)


// function hello(){
//     alert('Hello')
// }

// let elem = document.querySelector('.btn2')
// // let input = document.querySelector('.input')
// // elem.onclick = hello
// function hello(){
//     alert('hello')
//     // console.log(input.value)
//     elem.removeEventListener('click', hello)
// }
// function change(text){
//     let state = confirm(text)
//     if (state){
//         document.querySelector('.btn3').innerHTML = 'helo'
//     }
// }

// elem.addEventListener('click', hello)
// elem.addEventListener('mouseover', () => console.log('mouseover'))

// elem.onclick = function (event){
//     console.log(event)
// }

// elem.addEventListener('click', (event) => console.log(event.type))
// elem.addEventListener('mouseover', (event) => console.log(event.type))
// elem.addEventListener('mouseout', (event) => console.log(event.type))


// let div = document.querySelector('.block')
// let ul = document.querySelector('.list')
// let li = document.querySelector('.item')

// div.addEventListener('click', (event) => console.log('div'))
// ul.addEventListener('click', (event) => {
//     console.log('ul');
//     event.stopPropagation()
// })
// li.addEventListener('click', (event) => {
//     console.log('li');
//     event.stopPropagation()
// })

// let elem = document.querySelector('.wrap')

// elem.addEventListener('click', (event) => {
//     let target = event.target;
//     if (target.closest('.card')){
//         target.closest('.card').classList.toggle('new')
//     }
// }
// )

// let text = document.querySelector('.card_title')
// elem.addEventListener('dblclick', (event) => {
//     let target = event.target
//     if(target.classList.contains('card__text')){
//         target.outerHTML = `<input class="card_text" value=${target.innerHTML}>`
//         console.log(target.innerHTML)
//     }
// })

// elem.addEventListener('click', (event) => {
//     let target = event.target
//     if(target.classList.contains('card__text')){
//         target.outerHTML = `<input class="card_text" value=${target.innerHTML}>`
//         console.log(target.innerHTML)
//     }
// })

let elem = document.querySelector('.field');

let ball = document.querySelector(".ball")

elem.addEventListener('click', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    let scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let fieldRect = elem.getBoundingClientRect();
    let fieldX = fieldRect.left + scrollX;
    let fieldY = fieldRect.top + scrollY;

    ball.style.left = `${x - fieldX + scrollX}px`;
    ball.style.top = `${y - fieldY + scrollY}px`;
})

function removePane(button) {
    button.closest('.pane').remove();
  }