import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconDocumentLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconDocumentLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440.08 1600H480V320h640v320h320l.08 960zM1233.12 160H480c-88.24 0-160 71.84-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V526.88L1233.12 160zM1280 880H640v160h640V880zM960 560H640v160h320V560zm-320 800h640v-160H640v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}