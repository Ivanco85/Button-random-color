const button = document.querySelector('.button')
const body = document.querySelector('body')
const audio = document.querySelector('#audio')
const hexNumber = document.querySelector('.hex-number')
let gensColor = '#ee82ee'

function generateRandomColorurs() {
    const hexCode = '0123456789ABCDEF'
    let color = ''
    let sum = 0

    for (let i = 0; i < 6; i++) {
        const res = hexCode[Math.floor(Math.random() * hexCode.length)]
        color += res
        sum = parseInt(res, 16) + sum
    }

    console.log(sum);

    if (sum<45) {
        hexNumber.style.color = '#ffffff'
    }
    else {
        hexNumber.style.color = '#000000'
    }

        gensColor = '#' + color
    body.style.backgroundColor = gensColor
    hexNumber.innerText = gensColor

    sound()

}

function sound() {
    audio.play()
    audio.playbackRate = 2
}

body.style.backgroundColor = gensColor
hexNumber.innerText = gensColor

button.addEventListener('click', generateRandomColorurs)


