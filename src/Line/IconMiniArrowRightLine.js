import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMiniArrowRightLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMiniArrowRightLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}