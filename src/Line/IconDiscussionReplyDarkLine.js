import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconDiscussionReplyDarkLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconDiscussionReplyDarkLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M240 1200c132.548 0 240-107.452 240-240S372.548 720 240 720 0 827.452 0 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}