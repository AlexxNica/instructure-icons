import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconUnlockLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconUnlockLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1520 845.714h62.008c35.341 0 63.992 28.652 63.992 63.996v786.295c0 35.345-28.655 63.995-64.002 63.995H339.002c-35.347 0-64.002-28.652-64.002-63.995V909.71c0-35.345 28.65-63.996 63.992-63.996H503.5V617.143C503.5 365.714 709.15 160 960.5 160c205.47 0 380.4 137.467 437.416 325h-249.92c-40.997-58.679-109.1-96.429-187.496-96.429-127.96 0-228.5 100.572-228.5 228.572v228.571h308V846h480v-.286zM433.385 960h1053.23c18.438 0 33.385 13.96 33.385 31.182v615.636c0 17.218-14.953 31.182-33.385 31.182H433.385c-18.438 0-33.385-13.96-33.385-31.182V991.182C400 973.964 414.953 960 433.385 960z"/>
        <ellipse cx="959.935938" cy="1315" rx="204.935938" ry="205"/>
    </g>
</svg>`}
      />
    )
  }
}