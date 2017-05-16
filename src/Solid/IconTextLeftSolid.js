import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTextLeftSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTextLeftSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1600 240H160v160h1440V240zm-320 320H160v160h1120V560zM160 1040h1600V880H160v160zm1120 160H160v160h1120v-160zM160 1680h1440v-160H160v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}