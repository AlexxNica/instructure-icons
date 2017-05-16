import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconSyllabusLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconSyllabusLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M802 480h960V320H802v160zm0 560h960V880H802v160zm0 560h960v-160H802v160zM562 160H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}