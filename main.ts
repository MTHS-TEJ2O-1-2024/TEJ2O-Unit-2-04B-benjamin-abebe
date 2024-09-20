/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe 
 * Created on: Sep 2024 
 * This program Displays the current temperature. 
*/
let currentTemperature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showString("The temperature is: " + currentTemperature)
})
basic.clearScreen()
