import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconTrashLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconTrashLine"
        viewBox="0 0 1920 1920">
        
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <path d="M860 160c-110 0-200 90-200 200H460c-110 0-200 90-200 200h1400c0-110-90-200-200-200h-200c0-110-90-200-200-200H860zM460 760v962c0 22 16 38 38 38h926c22 0 38-16 38-38V760h-200v700c0 56-44 100-100 100s-100-44-100-100V760H862v700c0 56-44 100-100 100s-100-44-100-100V760H460z"/>
        <path d="M460 698h1002v182H460z"/>
    </g>

      </BaseIcon>
    )
  }
}