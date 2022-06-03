// getElementsByTagName(): whenever we use this method we access the individual elements using index or after loop through each individual items.
// an HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach

const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)

for(let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}
console.log('ads')

// getElementsByClassName() method returns an HTMLCollection object which is an array like list of HTML elements.
console.log(document.getElementsByClassName('class'))
console.log(document.getElementsByClassName('class').length);

console.log(document.getElementById('first-para'));

// the document.querySelector() can select an HTML or HTML elements by tag name, id or class name.
// if the tag name is used it selects only the first element
console.log(document.querySelector('.class'));

// querySelectorAll() returns a nodeList which is an array like object which support array methods. we can use for loop or forEach to loop through each nodeList elements.
const allLinks = document.querySelectorAll('.link')
allLinks.forEach(text => console.log(text))

// commone HTML attributes: id, class, src, style, href, disabled, title, alt
allLinks[1].id = 'second-link' // we added id
console.log(document.getElementById('second-link'))

// setAttribute() method set any html attribute. it takes the type of the attribute and the name of the attribute
document.getElementById('first-para').setAttribute('class', 'para')
console.log(document.getElementsByClassName('para'))

// the class list method is a good method to append additional class. it does not override the original class if a class exists rather it adds additional class for the element
// element.classList şekline kullanılır
allTitles[0].classList.add('additional-class')
console.log(document.getElementsByClassName('additional-class'));

allTitles[1].classList.remove('header')
console.log(document.getElementsByTagName('h1')[1])

// the textContent property is used to add text to an HTML ***ELEMENT***
document.getElementsByClassName('empty')[0].textContent = 'i was empty'
document.getElementsByClassName('empty')[1].textContent = 'i was empty'

// innerHTML can add a text or a HTML element or elements as children
const lists = `
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>`
document.querySelector('ul').innerHTML = lists;

// the innerHTML property can allow us also to remove all the children of a parent element
document.querySelectorAll('li')[6].innerHTML = ''; // sonuncuyu sildik

// adding style
const style = document.querySelectorAll('.style')
style[0].style.color = 'red'
style[1].style.fontSize = '32px'
style[1].style.color = 'green'
style[2].style.backgroundColor = 'yellow'
style[2].style.padding = '10px'
style[3].style.border = '1px solid black'


// DOM mini project-1

const date = new Date()

const bgTimer = document.querySelector('.bgTimer')
bgTimer.textContent = date

function timer() {
    const hexaSet = '0123456789abcdef'
    let hexaCode = '#'
    for(let i = 0; i <= 5; i++) {
        let number = Math.floor(Math.random() * hexaSet.length)
        hexaCode += hexaSet[number]
    }
    bgTimer.style.backgroundColor = hexaCode
}
setInterval(timer, 1000)
