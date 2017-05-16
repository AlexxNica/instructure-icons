import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconVideoLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconVideoLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1680 160H240c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h1440c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM800 1200l480-240-480-240v480zm-560 400V320h1440l.08 1280H240zM400 400h160v160H400V400zm320 0h160v160H720V400zm320 0h160v160h-160V400zm320 0h160v160h-160V400zm-960 960h160v160H400v-160zm320 0h160v160H720v-160zm320 0h160v160h-160v-160zm320 0h160v160h-160v-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}