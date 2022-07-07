OLED.init(128, 64)
OLED.clear()
load = 0
OLED.write_string_new_line("Hallo ich bin Dein Display, ok, vielleicht nicht sehr gross, aber ich fühle nich gut dabei....")

def on_forever():
    global load
    basic.pause(10)
    OLED.draw_loading(load)
    load += 1
    if load > 100:
        OLED.clear()
        load = 0
basic.forever(on_forever)
