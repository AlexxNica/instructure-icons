import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconSettings2Solid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconSettings2Solid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 1200c-132.56 0-240-107.44-240-240s107.44-240 240-240 240 107.44 240 240-107.44 240-240 240zm800-320l-274.96-137.52 97.2-291.6-113.12-113.12-291.6 97.2L1040 160H880L742.48 434.96l-291.6-97.2-113.12 113.12 97.2 291.6L160 880v160l274.96 137.52-97.2 291.6 113.12 113.12 291.6-97.2L880 1760h160l137.52-274.96 291.6 97.2 113.12-113.12-97.2-291.6L1760 1040V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}