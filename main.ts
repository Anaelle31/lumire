input.onButtonPressed(Button.A, function () {
    basic.showString("la luminosit√©")
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
