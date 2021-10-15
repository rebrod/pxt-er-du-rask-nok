let Pilnummer = 0
let Poeng = 0
let Fasit = 0
input.onButtonPressed(Button.A, function () {
    if (Pilnummer == 0) {
        Poeng += 1
    } else {
        Poeng += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
    Poeng = 0
    for (let index = 0; index < 20; index++) {
        basic.clearScreen()
        basic.pause(1000)
        Fasit = randint(0, 3)
        if (Fasit == 0) {
            basic.showArrow(ArrowNames.West)
        } else if (Fasit == 1) {
            basic.showArrow(ArrowNames.East)
        } else if (Fasit == 2) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showArrow(ArrowNames.South)
        }
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    for (let index = 0; index < 4; index++) {
        basic.showString("")
        basic.showNumber(Poeng)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Pilnummer == 2) {
        Poeng += 1
    } else {
        Poeng += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Pilnummer == 1) {
        Poeng += 1
    } else {
        Poeng += -1
    }
})
