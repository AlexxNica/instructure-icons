import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconBoxLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconBoxLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 0H80C35.84 0 0 35.84 0 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zM400 1440H80c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm-1680-80h160V560H160v800zM560 320h800V160H560v160zm1040 1040h160V560h-160v800zM560 1760h800v-160H560v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}