import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconComposeLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconComposeLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1480.022 1760H360.002C271.763 1760 200 1688.239 200 1599.997V479.977c0-88.16 71.761-160.002 160.003-160.002h560.01v160.003h-560.01v1120.02h1120.02V879.984h160.002v720.012c0 88.242-71.761 160.003-160.003 160.003zM824.62 829.16l226.244 226.244-282.805 56.56 56.56-282.804zm848.535-396.055c62.48-62.481 62.48-163.763 0-226.244-62.481-62.481-163.763-62.481-226.244 0L937.78 715.99l226.245 226.244 509.129-509.13z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}