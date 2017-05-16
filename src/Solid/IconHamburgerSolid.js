import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconHamburgerSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconHamburgerSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1520 1480H400v-240h1120v240zm0-400H400V840h1120v240zm0-400H400V440h1120v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}