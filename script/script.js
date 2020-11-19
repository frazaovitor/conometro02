let hora = 0
let min = 0
let seg = 0

let start = document.querySelector('.bg-green')
let pause = document.querySelector('.bg-yellow')
let stop = document.querySelector('.bg-red')

let tempo = 1000
let cron

document.querySelector('.bg-green').addEventListener('click', () => {
    cron = setInterval(() => { timer() }, tempo)
})

document.querySelector('.bg-yellow').addEventListener('click', () => {
    clearInterval(cron)
})

document.querySelector('.bg-red').addEventListener('click', () => {
    clearInterval(cron)
    hora = 0
    min = 0
    seg = 0
    document.querySelector('.counter').innerHTML = '00:00:00'
})

function timer() {
    seg++
    if (seg == 60) {
        min++
        seg = 0
        if (min == 60) {
            hora++
            min = 0
        }
    }
    let format = (hora < 10 ? '0' + hora : hora) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg)
    document.querySelector('.counter').innerHTML = format
}
