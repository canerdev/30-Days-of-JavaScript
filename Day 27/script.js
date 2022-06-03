const titles = ['Educator', 'motivator', 'instructer', 'motivational speaker', 'programmer', 'content creator']
const techs = ['HTML', 'CSS', 'JavaScript']
// const emojis = []
let emoji = document.querySelector('#emoji')
let title = document.querySelector('#title')
let tech = document.querySelector('#tech')



function showTitle() {
    for (let i = 0; i < titles.length; i++) {
        title.innerHTML = titles[i];
        
    }
}
setInterval(showTitle, 1000)