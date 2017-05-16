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

var IconCheckDarkSolid = function (_Component) {
  _inherits(IconCheckDarkSolid, _Component);

  function IconCheckDarkSolid() {
    _classCallCheck(this, IconCheckDarkSolid);

    return _possibleConstructorReturn(this, (IconCheckDarkSolid.__proto__ || Object.getPrototypeOf(IconCheckDarkSolid)).apply(this, arguments));
  }

  _createClass(IconCheckDarkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconCheckDarkSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1209.599 1339.52c-41.048 57.36-105.22 93.84-175.553 99.68-6.562.56-13.203.8-19.764.8-63.372 0-124.584-25.12-169.712-70.32L467.379 992.56c-93.778-93.68-93.778-245.68 0-339.36 93.777-93.76 245.646-93.76 339.424 0L983.636 830l464.008-649.52c5.36-7.6 11.922-13.76 18.003-20.48H317.03C228.614 160 157 231.6 157 320v1280c0 88.32 71.614 160 160.03 160h1280.242c88.337 0 160.03-71.68 160.03-160V572.96L1209.6 1339.52zm-195.349-19.528c-31.686 0-62.252-12.56-84.896-35.12l-377.111-377.12c-46.89-46.88-46.89-122.8 0-169.68 46.889-46.88 122.823-46.88 169.712 0l277.012 276.88 546.343-764.72c38.568-53.84 113.462-66.4 167.392-27.92 53.93 38.56 66.493 113.52 27.925 167.44l-628.679 880c-20.563 28.64-52.65 46.96-87.776 49.84-3.36.24-6.641.4-9.922.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconCheckDarkSolid;
}(_react.Component);

exports.default = IconCheckDarkSolid;