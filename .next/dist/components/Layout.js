'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _SharedHead = require('./SharedHead.js');

var _SharedHead2 = _interopRequireDefault(_SharedHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyle.peacock/code/personal-site/components/Layout.js';

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'app', 'data-jsx': 2696300460,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_SharedHead2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.headProperties), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('main', {
    'data-jsx': 2696300460,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.children), _react2.default.createElement(_style2.default, {
    styleId: 2696300460,
    css: '*[data-jsx="2696300460"]{font-family:"Roboto" !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd5QyxnQ0FDbEMiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGUucGVhY29jay9jb2RlL3BlcnNvbmFsLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzJztcbmltcG9ydCBTaGFyZWRIZWFkIGZyb20gJy4vU2hhcmVkSGVhZC5qcydcblxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICA8U2hhcmVkSGVhZD5cbiAgICAgIHtwcm9wcy5oZWFkUHJvcGVydGllc31cbiAgICA8L1NoYXJlZEhlYWQ+XG4gICAgPEhlYWRlci8+XG4gICAgPG1haW4+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9tYWluPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components/Layout.js */'
  }));
};