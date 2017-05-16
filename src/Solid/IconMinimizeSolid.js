import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMinimizeSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMinimizeSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797"/>
        <path d="M1358.5 1039.7h-797V880.3h797z"/>
    </g>
</svg>`}
      />
    )
  }
}