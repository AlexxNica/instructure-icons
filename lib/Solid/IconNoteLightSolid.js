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

var IconNoteLightSolid = function (_Component) {
  _inherits(IconNoteLightSolid, _Component);

  function IconNoteLightSolid() {
    _classCallCheck(this, IconNoteLightSolid);

    return _possibleConstructorReturn(this, (IconNoteLightSolid.__proto__ || Object.getPrototypeOf(IconNoteLightSolid)).apply(this, arguments));
  }

  _createClass(IconNoteLightSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconNoteLightSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1691.835 1691.76H228.909V228.903h1463.2l-.274 1462.857zm.274-1645.714H228.91c-100.87 0-182.9 82.011-182.9 182.857V1691.76c0 100.846 82.03 182.857 182.9 182.857h1463.2c100.87 0 182.9-82.011 182.9-182.857V228.903c0-100.846-82.03-182.857-182.9-182.857z"/>\n        <path d="M1509.2 503.143H411.8V686h1097.4zM1509.2 868.857H411.8v182.857h1097.4zM1234.85 1234.571H411.8v182.858h823.05z"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconNoteLightSolid;
}(_react.Component);

exports.default = IconNoteLightSolid;