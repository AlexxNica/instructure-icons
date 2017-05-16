import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconGradebookImportSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconGradebookImportSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M537.093 446.872l113.111 113.12-159.988 160h446.846c176.466 0 319.975 143.52 319.975 320v80H1097.05v-80c0-88.16-71.754-160-159.987-160H490.216l159.988 160-113.111 113.12L184 799.992l353.093-353.12zM857.068 1440h719.944V480H697.08V320H1737v1280H697.08v-400h159.988v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}