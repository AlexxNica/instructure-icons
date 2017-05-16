import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMediaLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMediaLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1360 1520h160v-160h-160v160zm-320 0h160v-160h-160v160zm-320 0h160v-160H720v160zm-320 0h160v-160H400v160zm960-960h160V400h-160v160zm-320 0h160V400h-160v160zm-320 0h160V400H720v160zm-320 0h160V400H400v160zm1280.08 1040L1680 320H240v1280h1440.08zM1840 320v1280c0 88.24-71.76 160-160 160H240c-88.24 0-160-71.76-160-160V320c0-88.32 71.76-160 160-160h1440c88.24 0 160 71.68 160 160zM800 720l480 240-480 240V720z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}