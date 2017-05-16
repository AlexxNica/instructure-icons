import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconXLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconXLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1659.92 376.56l-113.2-113.12-583.36 583.44-583.44-583.44-113.2 113.12L850.16 960l-583.44 583.44 113.2 113.12 583.44-583.44 583.36 583.44 113.2-113.12L1076.48 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}