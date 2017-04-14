import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconImportLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconImportLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1362 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H915.12l160-160L962 526.88 608.88 880 962 1233.12 1075.12 1120l-160-160H1362zm-80-640v160H402v960h720v-240h160v400H242V320h1040z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}