import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMatureLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMatureLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1610 160H310c-150 0-150 151.493-150 151.493v1300S160 1760 310 1760h1300c150 0 150-148.507 150-148.507v-1300S1760 160 1610 160zm-244.85 1288.657l-196.568-725 63.209 760.298-250.15 66.194-329.925-689.627 196.568 725L548.134 1665 257.761 594.03l466.866-123.657 260.224 602.164-76.791-650.746 466.865-123.657 290.448 1071.045-300.074 79.478h-.15z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}