'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyle.peacock/code/personal-site/components/Navigation.js';

// Next.js uses these Link components for cross-page routing


exports.default = function () {
  return _react2.default.createElement('nav', {
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', {
    className: _index2.default.pathname === '/' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', {
    className: _index2.default.pathName === '/blog' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', {
    className: _index2.default.pathName === '/contact' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 3267681474,
    css: 'a[data-jsx="3267681474"],a[data-jsx="3267681474"]:visited{margin:1em;text-decoration:none;color:#b5c0d1}a[data-jsx="3267681474"]:hover,a.active[data-jsx="3267681474"]{color:#415161}nav[data-jsx="3267681474"]{margin-bottom:1em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBR29CLEFBTWQsQUFFcUIsV0FQRyxHQUt2QixJQUdBLGNBTkQsY0FBQyIsImZpbGUiOiJjb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGUucGVhY29jay9jb2RlL3BlcnNvbmFsLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG4vLyBOZXh0LmpzIHVzZXMgdGhlc2UgTGluayBjb21wb25lbnRzIGZvciBjcm9zcy1wYWdlIHJvdXRpbmdcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICA8YSBcbiAgICAgICAgY2xhc3NOYW1lPXtSb3V0ZXIucGF0aG5hbWUgPT09Jy8nID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgID5Ib21lPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPScvYmxvZyc+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e1JvdXRlci5wYXRoTmFtZSA9PT0nL2Jsb2cnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgID5CbG9nPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPScvY29udGFjdCc+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e1JvdXRlci5wYXRoTmFtZSA9PT0nL2NvbnRhY3QnID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgID5Db250YWN0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhLCBhOnZpc2l0ZWQge1xuICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogI2I1YzBkMVxuICAgICAgfVxuICAgICAgYTpob3ZlciwgYS5hY3RpdmUge1xuICAgICAgICBjb2xvcjogIzQxNTE2MVxuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9uYXY+XG4pIl19 */\n/*@ sourceURL=components/Navigation.js */'
  }));
};