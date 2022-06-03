let weight = document.querySelector('#weight-input')
let planet = document.querySelector('#planet') 
let button = document.querySelector('button')
let hero = document.querySelector('#hero')
let img = document.querySelector('img')
let text = document.querySelector('.text')
let result = document.querySelector('#result')

button.addEventListener('click', e => {
    if(weight.value.length === 0) {
        hero.innerHTML = 'Mass is required'
    } else if (weight.value <= 0) {
        hero.innerHTML = 'Please enter a valid mass'
    } else if (planet.value == 'selected') {
        hero.innerHTML = 'You did not choose a planet yet'
    } else {
        img.setAttribute('src', `images/${planet.value.toLowerCase()}.png`)
        text.innerHTML = `The weight of the object on ${planet.value}`
        let gravity
        switch (planet.value.toLowerCase()) {
            case 'earth':
                gravity = 9.8
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'jupiter':
                gravity = 24.7
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'mars':
                gravity = 3.7
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'mercury':
                gravity = 3.7
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'moon':
                gravity = 1.6
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'neptune':
                gravity = 11.1
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'pluto':
                gravity = 0.6
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
             case 'saturn':
                gravity = 10.4
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
            case 'uranus':
                gravity = 8.8
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break                
            case 'venus':
                gravity = 8.8
                result.innerHTML = (gravity * weight.value) + ' ' + 'N'
                break
        }
            
    }
})