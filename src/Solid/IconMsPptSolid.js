import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMsPptSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMsPptSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1133 879v74.977h83.578v224.932h83.577V953.977h83.578V879zM631.578 953.977h41.788c23.026 0 41.79 16.795 41.79 37.489 0 20.694-18.764 37.489-41.79 37.489h-41.788v-74.978zm0 149.955h41.788c69.119 0 125.367-50.46 125.367-112.466C798.733 929.46 742.485 879 673.366 879H548v299.91h83.578v-74.978zM1007.155 991.466c0 20.694-18.763 37.489-41.789 37.489h-41.788v-74.978h41.788c23.026 0 41.79 16.795 41.79 37.489zM840 879v299.91h83.578v-74.978h41.788c69.119 0 125.367-50.46 125.367-112.466 0-62.006-56.248-112.466-125.367-112.466H840zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>
        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>
    </g>
</svg>`}
      />
    )
  }
}