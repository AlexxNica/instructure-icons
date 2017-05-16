import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconPeerReviewLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconPeerReviewLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1642.607 277.398C1568.012 202.399 1467.952 160 1360.025 160c-220.586 0-399.975 179.463-399.975 399.992h133.325c0-147.064 119.593-266.661 266.65-266.661 71.862 0 137.658 29.399 187.388 79.265l-120.726 120.73H1760V160l-117.393 117.398zM1360.025 826.686c-71.796 0-137.591-29.333-187.388-79.265l120.726-120.73H960.05v333.326l117.593-117.598c74.528 74.265 176.322 117.598 282.382 117.598 220.586 0 399.975-179.397 399.975-399.992h-133.325c0 147.064-119.593 266.661-266.65 266.661zM447.82 921c71.906 0 133.942 33.472 172.01 84.159-63.447 51.643-101.514 122.412-101.514 203.702 0 27.734 4.23 52.6 12.689 77.464-26.789 10.52-53.577 18.171-83.185 18.171-117.023 0-211.487-86.071-211.487-191.27 0-105.198 94.464-191.27 211.487-191.27V921zm352.281 130.064c106.1 0 191.748 86.286 191.748 191.748 0 105.461-85.647 191.748-191.748 191.748-106.1 0-191.748-86.287-191.748-191.748 0-105.462 85.648-191.748 191.748-191.748zm-609.007 210.71c55.094 65.344 130.687 105.062 216.531 107.625-34.594 48.687-56.375 107.625-56.375 171.687v84.563H95V1412.96c0-66.625 39.719-124.281 96.094-152.468v1.28zm832.812 128.125c56.375 28.187 96.094 85.844 96.094 152.469v212.687H479.375v-212.687c0-66.625 39.719-124.282 96.094-152.47 57.656 67.907 135.812 107.626 224.218 107.626 88.407 0 166.563-41 224.22-107.625z"/>
    </g>
</svg>`}
      />
    )
  }
}