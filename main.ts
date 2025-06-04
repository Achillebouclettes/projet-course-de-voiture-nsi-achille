basic.forever(function () {
    if (maqueen.Ultrasonic() > 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
})
