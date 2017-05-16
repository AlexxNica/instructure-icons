import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconDropDownSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconDropDownSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 1473.12l-376.56-376.56 113.12-113.12L880 1166.88V480h160v686.88l183.44-183.44 113.12 113.12L960 1473.12zM960 160c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}