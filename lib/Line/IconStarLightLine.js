'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconStarLightLine = function (_Component) {
  _inherits(IconStarLightLine, _Component);

  function IconStarLightLine() {
    _classCallCheck(this, IconStarLightLine);

    return _possibleConstructorReturn(this, (IconStarLightLine.__proto__ || Object.getPrototypeOf(IconStarLightLine)).apply(this, arguments));
  }

  _createClass(IconStarLightLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconStarLightLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M962 1278.359c15.44 0 30.96 4.48 44.4 13.44l298.874 199.276-100.159-350.714c-8.08-27.919-.24-57.998 20.32-78.558l263.435-263.435h-286.875c-30.319 0-57.998-17.12-71.598-44.24L962 417.256 793.603 754.13c-13.6 27.12-41.279 44.239-71.598 44.239H435.13l263.435 263.435c20.56 20.56 28.4 50.639 20.32 78.558l-100.159 350.714 298.875-199.276a80.059 80.059 0 0 1 44.399-13.44m479.99 479.99c-15.439 0-30.879-4.48-44.398-13.439L962 1454.516 526.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStarLightLine;
}(_react.Component);

exports.default = IconStarLightLine;