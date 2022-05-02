// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-03-JS/sw.js", {
    scope: "/ICS20-Unit-5-03-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const age17 = document.getElementById("age17").checked
  const age13 = document.getElementById("age13").checked
  const age5 = document.getElementById("age5").checked

  // process
  if (age17 == true) {
      document.getElementById("answer").innerHTML= "You can see an R rated movie alone"
  } else if (age13 == true) {
      document.getElementById("answer").innerHTML= "You can see an PG 13 rated movie alone"
  } else if (age5 == true) {
      document.getElementById("answer").innerHTML= "You can see an G rated movie alone"
  } else {
      document.getElementById("answer").innerHTML= "Uh. You are too young for most things!"
  }
}
