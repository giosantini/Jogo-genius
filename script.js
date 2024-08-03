let order = []
let clickedOrder = []
let score = 0

/*
0 = verde
1 = vermedlho
2 = amarelo
3 = azul
*/

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

//criando a ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.lenght] = colorOrder
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//criando a ordem onde a cor ira piscar
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250) 
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

//checagem de botões clicados
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!!!`)
        nextLevel()
    }
}

//função para o click do usuario
let click = (color) => {
    clickedOrder [clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

//função para o retorno de uma cor
let createColorElement = (color) => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red
    } else if (color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }
}

//função para o próximo nivel do jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`)
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('bem vindo ao Genius! Iniciando um novo jogo')
    score = 0

    nextLevel()
}

//criado o evento para clique
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()