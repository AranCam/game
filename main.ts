input.onButtonPressed(Button.A, function () {
    display.showColor(GAME_ZIP64.rgb(0, 0, 255))
})
input.onButtonPressed(Button.B, function () {
    temp = 1
    temp = 8
    for (let index = 0; index < 2; index++) {
        display.setPixelColorAt(temp, GAME_ZIP64.rgb(255, 200, 255))
    }
    display.show()
})
let temp = 0
let display: GAME_ZIP64.ZIP64Display = null
display = GAME_ZIP64.createZIP64Display()
display.setBrightness(30)
display.showColor(GAME_ZIP64.rgb(255, 0, 0))
basic.forever(function () {
	
})
