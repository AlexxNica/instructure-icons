import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconLinkLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconLinkLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M791.396 1015.028l-561.762 562.647 112.337 112.402 561.761-562.647-112.336-112.402zm337.089-112.402l561.762-562.488-112.416-112.482-561.762 562.488 112.416 112.482zm561.762-224.884l-56.248-56.241-112.337 112.482 56.248 56.24c15.015 15.035 23.198 34.922 23.198 56.241 0 21.16-8.262 41.127-23.198 56.162l-674.098 675.049c-30.03 29.99-82.385 29.99-112.416 0l-56.168-56.241-112.337 112.402 56.169 56.24C724.105 1735.182 783.928 1760 847.644 1760c63.636 0 123.459-24.82 168.504-69.923l674.099-674.97C1735.213 970.083 1760 910.183 1760 846.464c0-63.718-24.787-123.698-69.753-168.722zM229.714 1240.07c-92.952-93.072-92.952-244.453 0-337.525l674.098-674.89c89.933-90.208 246.997-90.208 337.089 0l56.088 56.24L1184.732 396.3l-56.168-56.24c-15.094-15.036-34.956-23.309-56.247-23.309-21.292 0-41.233 8.273-56.169 23.308l-674.177 674.97c-30.984 31.103-30.984 81.537 0 112.56l56.168 56.242-112.336 112.481-56.09-56.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}