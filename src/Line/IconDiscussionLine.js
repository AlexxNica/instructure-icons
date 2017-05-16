import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconDiscussionLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconDiscussionLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M383.453 1519.988h616.554c352.877 0 639.994-251.197 639.994-559.995 0-308.797-287.117-559.994-639.994-559.994-352.876 0-639.994 251.197-639.994 559.994 0 122.96 45.44 239.998 131.359 338.557 26.8 30.88 26.16 77.04-1.68 107.04l-106.239 114.398zm616.554 159.999H200.015c-31.84 0-60.64-18.88-73.36-48-12.72-29.2-6.88-63.12 14.72-86.399l184.479-198.718c-82.56-115.52-125.84-248.078-125.84-386.877C200.015 563.037 558.892 240 1000.008 240 1441.123 240 1800 563.037 1800 959.993c0 396.957-358.877 719.994-799.993 719.994z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}