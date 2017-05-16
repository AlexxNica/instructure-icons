'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconLinkedinSolid = function (_Component) {
  _inherits(IconLinkedinSolid, _Component);

  function IconLinkedinSolid() {
    _classCallCheck(this, IconLinkedinSolid);

    return _possibleConstructorReturn(this, (IconLinkedinSolid.__proto__ || Object.getPrototypeOf(IconLinkedinSolid)).apply(this, arguments));
  }

  _createClass(IconLinkedinSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconLinkedinSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1560 1546.96h-257.36v-414.04c0-104-37.2-174.96-130.2-174.96-71.08 0-113.44 47.84-131.96 94.08-6.8 16.48-8.52 39.6-8.52 62.72v432.08H774.72s3.44-701.2 0-773.84h257.24v109.72c34.24-52.72 95.32-127.84 231.88-127.84 169.24 0 296.16 110.64 296.16 348.28v443.8zM503.84 667.44h-1.72C415.8 667.44 360 607.92 360 533.68 360 457.76 417.52 400 505.52 400s142.12 57.76 143.84 133.68c0 74.28-55.84 133.76-145.52 133.76zm128.6 879.52H375.2V773.12h257.24v773.84zM1600 160H320c-88.36 0-160 71.64-160 160v1280c0 88.36 71.64 160 160 160h1280c88.36 0 160-71.64 160-160V320c0-88.36-71.64-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconLinkedinSolid;
}(_react.Component);

exports.default = IconLinkedinSolid;