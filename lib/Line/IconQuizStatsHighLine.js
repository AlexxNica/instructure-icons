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

var IconQuizStatsHighLine = function (_Component) {
  _inherits(IconQuizStatsHighLine, _Component);

  function IconQuizStatsHighLine() {
    _classCallCheck(this, IconQuizStatsHighLine);

    return _possibleConstructorReturn(this, (IconQuizStatsHighLine.__proto__ || Object.getPrototypeOf(IconQuizStatsHighLine)).apply(this, arguments));
  }

  _createClass(IconQuizStatsHighLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsHighLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M795 771h235.917l-441.544 441.632 102.968 102.896L1134 874.029V1110h145V626H795z' }),
          _react2.default.createElement('path', { d: 'M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800' })
        )
      );
    }
  }]);

  return IconQuizStatsHighLine;
}(_react.Component);

exports.default = IconQuizStatsHighLine;