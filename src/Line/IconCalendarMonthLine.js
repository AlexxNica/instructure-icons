import React, { Component } from 'react'
import BaseIcon from '../IconBase'

export default class IconCalendarMonthLine extends Component {
  render() {
    return (
      <BaseIcon
        {...this.props}
        name="IconCalendarMonthLine"
        viewBox="0 0 1920 1920">
        
    <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V480c0-88.4-71.6-160-160-160zM320 1760h1280V800H320v960zm560-520h240v-240H880v240zm400 0h240v-240h-240v240zm-400 400h240v-240H880v240zm-400 0h240v-240H480v240zm800 0h240v-240h-240v240z" stroke="none" strokeWidth="1" fillRule="evenodd"/>

      </BaseIcon>
    )
  }
}