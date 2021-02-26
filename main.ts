// 40''
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
    basic.pause(1000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
})
// 14''
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 70)
    basic.pause(1000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
})
// 20''
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 100)
    basic.pause(1000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
})
// 12''
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.pause(500)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
    basic.pause(1000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 0)
})
