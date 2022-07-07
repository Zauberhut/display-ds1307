let load = 0
OLED.init(128, 64)
OLED.clear()
OLED.writeStringNewLine("Hallo ich bin Dein Display, ok, vielleicht nicht sehr gross, aber ich fühle nich gut dabei....")
basic.forever(function () {
    basic.pause(10)
    OLED.drawLoading(load)
    load += 1
    if (load > 100) {
        OLED.clear()
        load = 0
    }
})
