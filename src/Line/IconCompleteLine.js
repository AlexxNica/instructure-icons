import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconCompleteLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconCompleteLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m-67.224-405.824l-323.52-323.44 141.44-141.44 156.56 156.56 331.36-463.92 162.72 116.16-468.56 656.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}