// creating an element
let title = document.createElement('h1') // tag name as string
title.textContent = 'this text was written with js'
console.log(title.textContent)
document.querySelector('.empty').innerHTML = title.textContent

// creating elements
let para 
for (let i = 0; i < 3; i++) {
    para = document.createElement('p')
    para.className = 'text'
    para.style.backgroundColor = 'crimson'
    para.style.color = '#fff'
    para.textContent = i
    document.body.appendChild(para)
}


ul = document.querySelector('ul')
lists = document.querySelectorAll('li')
for(const li of lists) {
    ul.removeChild(li)
}
// or
ul.innerHTML =''


// exercise - number generator
const primeNums = [2, 3, 5, 7, 11, 13, 17, 19] // there are more prime numberssa 
let box
for (let i = 0; i < 102; i++) {
    box = document.createElement('div')
    box.textContent = i
    box.style.display ='inline-block'
    box.style.margin ='5px'
    box.style.padding ='5px'
    box.style.width = '25px'
    box.style.textAlign = 'center'

    if(primeNums.includes(i) === true) { 
        box.style.backgroundColor = 'red'
    } else if(i % 2 != 0) {
        box.style.backgroundColor = 'yellow'
    } else if(i % 2 === 0 || i === 0) {
        box.style.backgroundColor = 'green'
    }
    document.querySelector('.container').append(box)
}
