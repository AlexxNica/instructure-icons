import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconPaperclipLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconPaperclipLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M846.615 1757C626.666 1757 467 1581.432 467 1339.524v-645.19C467 391.396 679.13 163 960.5 163S1454 391.397 1454 694.333v531.334h-151.846V694.333c0-219.896-143.723-379.523-341.654-379.523-197.931 0-341.654 159.627-341.654 379.523v645.19c0 132.303 70.457 265.667 227.77 265.667 157.312 0 227.769-133.364 227.769-265.666V770.238c0-45.695-11.085-151.81-113.885-151.81-102.8 0-113.885 106.115-113.885 151.81v531.333H694.77V770.238c0-181.64 106.824-303.619 265.731-303.619 158.907 0 265.73 121.979 265.73 303.62v569.285c0 241.908-159.665 417.476-379.615 417.476" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}