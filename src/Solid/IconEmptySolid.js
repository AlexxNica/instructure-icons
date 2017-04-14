import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconEmptySolid (props) {
  return (
    <SVGIcon
      {...props}
      name="IconEmptySolid"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M958 1559.972c-331.318 0-599.972-268.542-599.972-599.916 0-331.374 268.654-599.972 599.972-599.972S1557.972 628.626 1557.972 960c0 331.374-268.654 599.916-599.972 599.916v.056zM958 160c-441.738 0-800 358.318-800 800s358.318 800 800 800 800-358.318 800-800c0-441.738-358.318-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}