import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconMarkerSolid (props) {
  return (
    <SVGIcon
      {...props}
      name="IconMarkerSolid"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1016.56 1816.54l480-479.994c15.6-15.6 23.44-36.08 23.44-56.56V160c0-44.16-35.84-79.999-80-79.999H480c-44.16 0-80 35.84-80 80v1119.986c0 20.48 7.84 40.96 23.44 56.56l480 479.994c31.28 31.28 81.84 31.28 113.12 0z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}