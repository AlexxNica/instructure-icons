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

var IconForwardSolid = function (_Component) {
  _inherits(IconForwardSolid, _Component);

  function IconForwardSolid() {
    _classCallCheck(this, IconForwardSolid);

    return _possibleConstructorReturn(this, (IconForwardSolid.__proto__ || Object.getPrototypeOf(IconForwardSolid)).apply(this, arguments));
  }

  _createClass(IconForwardSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconForwardSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M439.993 480.026h519.989V240.031c0-32.32 19.52-61.519 49.359-73.918 30.08-12.4 64.319-5.6 87.198 17.36l719.985 719.985c31.28 31.279 31.28 81.838 0 113.117L1096.54 1736.56a80.026 80.026 0 0 1-56.559 23.44c-10.32 0-20.72-2-30.639-6.08-29.84-12.4-49.359-41.599-49.359-73.918v-239.995H81.002a.998.998 0 0 1-1.002-1.005v-957.97a.999.999 0 0 1 1.002-1.006h358.99z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconForwardSolid;
}(_react.Component);

exports.default = IconForwardSolid;