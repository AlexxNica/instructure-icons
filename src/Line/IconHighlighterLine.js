import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconHighlighterLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconHighlighterLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M912.26 1343.056l-276.092-275.968 792.314-686.744 166.684 174.783-682.907 787.93zM1760 551.105c0-43.032-16.733-83.41-47.141-113.894l-170.627-170.6c-60.817-60.808-170.947-56.867-223.318-3.861L400.22 1058.642l520.406 520.246 792.152-914.13c30.409-30.324 47.142-70.701 47.222-113.653zM1116.4 1699h643.568v-160.868h-643.569V1699zM160 1618.566h437.868l121.071-121.053-218.893-218.86L160 1618.566z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}