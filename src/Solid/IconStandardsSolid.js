import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconStandardsSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconStandardsSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1718.8 450.08l-720-400c-24.24-13.44-53.52-13.44-77.76 0l-720 400A80.03 80.03 0 0 0 160 520c0 55.52 9.12 1360 800 1360s800-1304.48 800-1360c0-29.04-15.76-55.76-41.2-69.92zm-731.76 935.2L580 1080l120-160 232.88 174.72 342.32-547.68 169.6 106-457.76 732.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}