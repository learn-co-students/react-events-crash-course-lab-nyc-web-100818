import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  // export function drawChromeBoiAtCoords(x, y) {
  //
  //   const canvas = document.querySelector("canvas") // sloppy but we haven't introduced lifecycle methods and canvas wouldn't be rendered
  //   const ctx = canvas.getContext("2d")
  //   const rect = canvas.getBoundingClientRect()
  //   const [cX, cY] = [rect.left, rect.top]
  //
  //   let img
  //   if (cycling) {
  //     img = colors[idx]
  //     idx = (idx + 1) % 3
  //   } else {
  //     img = def
  //   }
  //
  //   ctx.drawImage(img, x - cX - 50, y - cY - 80, sizeX, sizeY)
  // }

  /* TODO: This method should capture the `x` and `y` coordinates of the mouse
  * from the event and use them to invoke the `drawChromeBoiAtCoords`
  * function that has been provided and is already imported
  * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
  */
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleKeyDown = (event) => {
    if ( event.key === 'a') {
      resize('+')
    }
    else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={ () => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
