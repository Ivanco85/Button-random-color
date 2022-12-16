const button = document.querySelector('.button')
const body = document.querySelector('body')
const audio = document.querySelector('#audio')
let gensColor = '#ee82ee'


function generateRandomColorurs() {
    const hexCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    gensColor = '#' + color
    body.style.backgroundColor = gensColor

    sound()

}

function sound() {
    audio.play()
    audio.playbackRate = 2
}

body.style.backgroundColor = gensColor

button.addEventListener('click', generateRandomColorurs)


