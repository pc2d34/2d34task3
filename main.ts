let number = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    number = 1
    for (let index = 0; index < 6; index++) {
        basic.showNumber(number)
        basic.pause(1000)
        number += 1
    }
})
input.onButtonPressed(Button.B, function () {
    count = 9
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        basic.pause(1000)
        count += -1
    }
})
basic.forever(function () {
	
})
