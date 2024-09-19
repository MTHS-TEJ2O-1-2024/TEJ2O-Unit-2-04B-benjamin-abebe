/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe 
 * Created on: Sep 2024 
 * This program Displays the current temperature. 
*/

basic.clearScreen()

let currentTemperature = input.temperature()

input.onButtonPressed(Button.A, function () {
    basic.showString("The current temperature is: " + currentTemperature)
})


