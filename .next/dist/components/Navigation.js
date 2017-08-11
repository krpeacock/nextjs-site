'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

require('isomorphic-fetch');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Next.js uses these Link components for cross-page routing

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation() {
    (0, _classCallCheck3.default)(this, Navigation);
    return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.url;
      console.log(pathname);
      return _react2.default.createElement('nav', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: pathname === '/' ? 'active' : ''
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/blog' }, _react2.default.createElement('a', {
        className: pathname === '/blog' ? 'active' : ''
      }, 'Blog')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
        className: pathname === '/contact' ? 'active' : ''
      }, 'Contact')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // query.slug
                alert(query);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;