import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconCollectionLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconCollectionLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1680 920h-400c0-88.16-71.76-160-160-160H800c-88.24 0-160 71.84-160 160H240V760c0-44.16 35.92-80 80-80h1280c44.08 0 80 35.84 80 80v160zm-880 160V920h320l-.24 160H800zm800 400c0 44.16-35.92 80-80 80H400c-44.08 0-80-35.84-80-80v-400h320c0 88.24 71.76 160 160 160h320c88.24 0 160-71.76 160-160h320v400zM720 360h480v160H720V360zm880 160h-240V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H320C187.68 520 80 627.68 80 760v320h80v400c0 132.32 107.68 240 240 240h1120c132.32 0 240-107.68 240-240v-400h80V760c0-132.32-107.68-240-240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}