import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconCoursesSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconCoursesSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 960H320V320h160v640zm80-800H240c-44.16 0-80 35.84-80 80v1440c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V240c0-44.16-35.84-80-80-80zm560 320H800c-44.16 0-80 35.84-80 80v1120c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V560c0-44.16-35.84-80-80-80zm-80 800H880V640h160v640zm640-960h-320c-44.16 0-80 35.84-80 80v1280c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V400c0-44.16-35.84-80-80-80zm-80 800h-160V480h160v640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}