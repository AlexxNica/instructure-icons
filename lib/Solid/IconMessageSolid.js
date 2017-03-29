'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMessageSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMessageSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMessageSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1759.76 598.772l-757.6 470.196c-12.88 8-27.52 12.081-42.16 12.081-14.64 0-29.28-4.08-42.16-12l-757.6-470.197c0 .72-.24 1.44-.24 2.08v720.056C160 1409.154 231.76 1481 320 1481h1280c88.24 0 160-71.846 160-160.012V600.932c0-.72-.24-1.44-.24-2.16zM960 906.876L242.8 461.802C265.76 449 291.84 441 320 441h1280c28.16 0 54.16 8 77.2 20.802L960 906.876z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}