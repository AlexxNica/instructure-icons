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

var IconDiscussionSearchLine = function (_Component) {
  _inherits(IconDiscussionSearchLine, _Component);

  function IconDiscussionSearchLine() {
    _classCallCheck(this, IconDiscussionSearchLine);

    return _possibleConstructorReturn(this, (IconDiscussionSearchLine.__proto__ || Object.getPrototypeOf(IconDiscussionSearchLine)).apply(this, arguments));
  }

  _createClass(IconDiscussionSearchLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconDiscussionSearchLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1795.266 1567.007l-316.747-316.747c78.807-121.61 121.45-263.143 121.45-411.315C1599.89 419.549 1260.42 80 840.945 80 421.549 80 82 419.469 82 838.945c0 419.315 339.469 758.944 758.945 758.944 148.252 0 289.784-42.643 411.235-121.37l316.667 316.667c62.725 62.885 163.934 62.725 226.339.08 62.405-62.405 62.405-163.934.08-226.26zM242.014 838.945c0-330.989 267.862-598.851 598.93-598.851 330.829 0 598.932 267.782 598.932 598.85 0 159.934-62.326 310.347-175.535 423.397-113.13 113.21-263.463 175.455-423.476 175.455-330.749.08-598.851-267.863-598.851-598.851z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconDiscussionSearchLine;
}(_react.Component);

exports.default = IconDiscussionSearchLine;