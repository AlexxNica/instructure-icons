import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTrashLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTrashLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M445 885v837c0 22 16 38 38 38h926c22 0 38-16 38-38V885l1.789-192.138-1003.679 1.231L445 885zm602 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zm-400 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zM1445 360h-200c0-110-90-200-200-200H845c-110 0-200 90-200 200H445c-110 0-200 90-200 200h1400c0-110-90-200-200-200"/>
    </g>
</svg>`}
      />
    )
  }
}