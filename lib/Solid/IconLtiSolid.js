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

var IconLtiSolid = function (_Component) {
  _inherits(IconLtiSolid, _Component);

  function IconLtiSolid() {
    _classCallCheck(this, IconLtiSolid);

    return _possibleConstructorReturn(this, (IconLtiSolid.__proto__ || Object.getPrototypeOf(IconLtiSolid)).apply(this, arguments));
  }

  _createClass(IconLtiSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconLtiSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1320 320H680c-66.24 0-120 53.76-120 120 0 66.24 53.76 120 120 120h200v920c0 66.24 53.76 120 120 120 66.24 0 120-53.76 120-120V560h200c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120M600 1360H320V440c0-66.24-53.76-120-120-120-66.24 0-120 53.76-120 120v1040c0 66.24 53.76 120 120 120h400c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120m1240-920v1040c0 66.24-53.76 120-120 120-66.24 0-120-53.76-120-120V440c0-66.24 53.76-120 120-120 66.24 0 120 53.76 120 120" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconLtiSolid;
}(_react.Component);

exports.default = IconLtiSolid;