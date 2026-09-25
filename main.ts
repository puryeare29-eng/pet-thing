let affection = 50
let energy = 75
loops.everyInterval(1000, function () {
    affection += -5
    energy += -5
})
basic.forever(function () {
    if (affection < 25) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            affection = 100
        }
    }
})
basic.forever(function () {
    if (energy < 25) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    } else {
    	
    }
})
