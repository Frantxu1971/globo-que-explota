input.onButtonPressed(Button.A, function () {
    if (jugador == 8) {
        if (estado < 6) {
            radio.sendNumber(randint(1, 8))
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
function Globo () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    estado += 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    estado += 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    estado += 1
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.pause(200)
    estado += 1
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(200)
    estado += 1
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(200)
    estado += 1
}
let estado = 0
let jugador = 0
radio.setGroup(1)
jugador = 3
estado = 0
basic.forever(function () {
    Globo()
})
