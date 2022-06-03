// we use the addEventListener() method to listen different event types on HTML elements. 
// it takes two arguments; an event listener and a callback function.

// click
const btn = document.querySelector('button')
btn.addEventListener('click', e => {
    console.log('e gives the event listener object: ', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log('e.target.textContent gives the content of selected element: ', e.target.textContent)
})

// or you can attach directly to the HTML element as inline script
const clickMe = () => {
    alert('we can attach event on HTML element')
}

// dblclick
document.querySelector('p').addEventListener('dblclick', e => {
    document.querySelector('p').style.backgroundColor = 'red'
})

// mouseenter --> mouse üzerine gelince gerçekleşir, the effect is permanent
const enter = () => {
    document.getElementById('mouseenter').style.color = 'crimson'
}
document.getElementById('mouseenter').addEventListener('mouseenter', enter)

// mouseleave --> mouse üzerinden ayrılınca gerçekleşir, the effect is permanent
const leave = () => {
    document.getElementById('mouseleave').style.backgroundColor = 'red'
    document.getElementById('mouseleave').style.color = 'white'
}
document.getElementById('mouseleave').addEventListener('mouseleave', leave)

// mousemove --> mouse'u elementin içinde her hareket ettirdiğinde çalışır
document.getElementById('mousemove').addEventListener('mousemove', e => {
    console.log('mousemove is triggered each time the mouse is moved when it is over an element')
})

// mouseover --> it triggers when the mouse enters the div or its child elements
document.getElementById('mouseover').addEventListener('mouseover', e => {
    console.log('mouseover is successful')
})

// mouseout --> mouse elementten veya onun çocuğundan çıktığında gerçekleşir
document.getElementById('mouseout').addEventListener('mouseout', e => {
    console.log('mouseout is successful')
})

// input --> each time when a value is entered to input field
document.getElementById('input').addEventListener('input', e => {
    console.log('input is successful');
    document.getElementById('input').style.backgroundColor ='gray'
})

// change --> when a value changes in on input field --- for input, select and textarea
document.getElementById('change').addEventListener('change', e => {
    document.querySelector('.result').textContent = `you chose ${e.target.value}`
})

// blur --> it fires when an element has lost focus 
document.getElementById('blur').addEventListener('blur', e => {
    document.getElementById('blur').style.backgroundColor = 'red'
})

// keydown --> it fired when a key is pressed
document.getElementById('keydown').addEventListener('keydown', e => {
    console.log(`you pressed to ${e.code}`);
})

// keyup --> it fired when a key is released
document.getElementById('keyup').addEventListener('keyup', e => {
    console.log(`you pressed ${e.code}`)
})

// the difference between keyup and keydown is processing quoue

// onload --> when the browser has finished loading a page



// getting value from an input
const fatherHeight = document.querySelector('#father-height') // in cm
const motherHeight = document.querySelector('#mother-height') // in cm 
const button = document.querySelector('#calculate')

let averageHeight // for men 
button.addEventListener('click', () => {
    averageHeight = (parseInt(fatherHeight.value) + Number(motherHeight.value) + 13) / 2 // parseInt and Number are for converting string data to number 
    document.querySelector('.btn-result').innerHTML = `your average height is ${averageHeight} cm`
})

// without clicking a button 
document.querySelector('#input-2').addEventListener('input', e => {
    document.querySelector('#input-result').textContent = e.target.value
    document.querySelector('#input-result').style.backgroundColor = 'yellow'
})


// exercıse - generate number
let box 
let container = document.getElementById('generateNumber')
let maxNumber = document.querySelector('#genNum-input')
let genButton = document.getElementById('genNum-btn')

function getNumber() {
    for (let i = 1; i <= Number(maxNumber.value); i++) {
        box = document.createElement('div')
        box.textContent = i
        box.style.padding = '10px'
        box.style.display  = 'inline-block'
        box.style.textAlign = 'center'
        box.style.width = '25px'
        box.style.margin = '5px'

        if (i % 2 === 0) {
            box.style.backgroundColor = 'green'
        } 
        else if (i % 2 != 0) {
            box.style.backgroundColor = 'yellow'
        }
        
        container.append(box)
    }
}

genButton.addEventListener('click', e => {
    container.innerHTML = ''
    if(Number(maxNumber.value)>200) {
        alert('enter a number between 1 and 200')
    } else {
        getNumber()
    }
})



// exercise - generate the keyboard code (not finished)
document.body.addEventListener('keydown', e => {
    const code = document.getElementById('show-key')
    code.innerHTML = e.code
    code.style.color = 'darkgreen'
    code.style.fontSize = '32px'
    console.log(code)
    document.querySelector('#keyCode').innerHTML = `you pressed ${e.code}`  // or keyCode ???  
}) 