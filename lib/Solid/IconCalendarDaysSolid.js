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

var IconCalendarDaysSolid = function (_Component) {
  _inherits(IconCalendarDaysSolid, _Component);

  function IconCalendarDaysSolid() {
    _classCallCheck(this, IconCalendarDaysSolid);

    return _possibleConstructorReturn(this, (IconCalendarDaysSolid.__proto__ || Object.getPrototypeOf(IconCalendarDaysSolid)).apply(this, arguments));
  }

  _createClass(IconCalendarDaysSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconCalendarDaysSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1181.84 973.6c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4l-143.92 255.2c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H825.84c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8zM1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconCalendarDaysSolid;
}(_react.Component);

exports.default = IconCalendarDaysSolid;