import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconStatsSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconStatsSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M600 1440c0-44.24-35.84-80-80-80H280c-44.16 0-80 35.76-80 80v160c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80v-160zm560-560c0-44.24-35.84-80-80-80H840c-44.16 0-80 35.76-80 80v720c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80V880zm560-560c0-44.24-35.84-80-80-80h-240c-44.16 0-80 35.76-80 80v1280c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80V320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}