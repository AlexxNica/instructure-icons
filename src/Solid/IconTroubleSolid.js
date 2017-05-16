import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTroubleSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTroubleSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}