import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconPinSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconPinSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M191.093 847.177c-35.662 49.246-24.649 118.078 24.598 153.739s118.078 24.648 153.74-24.598l76.869-76.87 307.478 307.479-153.739 153.739c-84.557 84.556-84.557 222.922 0 307.478l461.218-461.217 461.217 461.217 221.385 86.094-67.645-239.833-461.218-461.218 461.218-461.217c-84.557-84.557-222.922-84.557-307.479 0l-153.739 153.739L907.518 438.23l76.87-76.87c42.453-42.453 42.453-111.284 0-153.738-42.455-42.454-111.286-42.454-153.74 0L215.69 822.579a108.71 108.71 0 0 0-13.837 13.836 108.71 108.71 0 0 0-9.224 9.224l-1.537 1.538z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}