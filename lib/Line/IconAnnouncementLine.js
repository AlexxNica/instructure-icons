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

var IconAnnouncementLine = function (_Component) {
  _inherits(IconAnnouncementLine, _Component);

  function IconAnnouncementLine() {
    _classCallCheck(this, IconAnnouncementLine);

    return _possibleConstructorReturn(this, (IconAnnouncementLine.__proto__ || Object.getPrototypeOf(IconAnnouncementLine)).apply(this, arguments));
  }

  _createClass(IconAnnouncementLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconAnnouncementLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1568.992 1221.373l-827.163-343.75c-42.483-16.96-88.325-18.8-106.086-18.8H351.008V689.947h284.735c17.761 0 63.603-1.84 108.086-19.6l825.163-342.951v893.977zM1648.996 159h-91.605L682.386 522.59c-12.241 4.88-31.922 7.36-46.643 7.36H271.004c-44.162 0-80.004 35.84-80.004 79.999V938.82c0 44.238 35.842 79.998 80.004 79.998h152.328l253.453 665.903C695.026 1732.56 740.63 1762 788.951 1762c14.24 0 28.642-2.48 42.722-7.84 61.924-23.6 93.045-92.877 69.444-154.876l-218.091-572.786 874.365 363.351h91.605c44.162 0 80.004-35.839 80.004-79.998V238.998c0-44.159-35.842-79.998-80.004-79.998z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconAnnouncementLine;
}(_react.Component);

exports.default = IconAnnouncementLine;