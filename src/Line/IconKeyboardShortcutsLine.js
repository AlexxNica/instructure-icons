import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconKeyboardShortcutsLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconKeyboardShortcutsLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1693.417 599.8h-659.625v-73.3c0-40.49 32.806-73.3 73.291-73.3h73.292c121.106 0 219.875-98.78 219.875-219.9V160h-146.583v73.3c0 40.49-32.807 73.3-73.292 73.3h-73.292c-121.105 0-219.875 98.78-219.875 219.9v73.3H227.583C146.613 599.8 81 665.421 81 746.4v733c0 80.979 65.613 146.6 146.583 146.6h1465.834c80.97 0 146.583-65.62 146.583-146.6v-733c0-80.979-65.613-146.6-146.583-146.6zM1400 820h147v147h-147V820zm-220 0h147v147h-147V820zm221 220v147h-147v-147h147zM961 820h147v147H961V820zm220 220v147h-147v-147h147zm-220 0v147H814v-147h147zM741 820h147v147H741V820zm-220 0h147v147H521V820zm220 220v147H594v-147h147zM301 820h147v147H301V820zm220 220v147H374v-147h147zm-73 367H301v-147h147v147zm879 0H521v-147h806v147zm220 0h-147v-147h147v147zm74-220h-147v-147h147v147z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}