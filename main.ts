OLED.init(128, 64)
OLED.clear()
let load = 0
basic.forever(function () {
    basic.pause(10)
    OLED.drawLoading(load)
    load += 1
    if (load > 100) {
        load = 0
    }
})
