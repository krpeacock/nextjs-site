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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyle.peacock/code/personal-site/components/Navigation.js';

// Next.js uses these Link components for cross-page routing


exports.default = function () {
  return _react2.default.createElement('nav', {
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', {
    className: window.location.pathname === '/' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    className: window.location.pathName === '/blog' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', {
    className: window.location.pathName === '/contact' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 3267681474,
    css: 'a[data-jsx="3267681474"],a[data-jsx="3267681474"]:visited{margin:1em;text-decoration:none;color:#b5c0d1}a[data-jsx="3267681474"]:hover,a.active[data-jsx="3267681474"]{color:#415161}nav[data-jsx="3267681474"]{margin-bottom:1em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBR29CLEFBTWQsQUFFcUIsV0FQRyxHQUt2QixJQUdBLGNBTkQsY0FBQyIsImZpbGUiOiJjb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGUucGVhY29jay9jb2RlL3BlcnNvbmFsLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIE5leHQuanMgdXNlcyB0aGVzZSBMaW5rIGNvbXBvbmVudHMgZm9yIGNyb3NzLXBhZ2Ugcm91dGluZ1xuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPG5hdj5cbiAgICA8TGluayBocmVmPScvJz5cbiAgICAgIDxhIFxuICAgICAgICBjbGFzc05hbWU9e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0nLycgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgPkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9Jy9ibG9nJz5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17d2luZG93LmxvY2F0aW9uLnBhdGhOYW1lID09PScvYmxvZycgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgPkJsb2c8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17d2luZG93LmxvY2F0aW9uLnBhdGhOYW1lID09PScvY29udGFjdCcgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgPkNvbnRhY3Q8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEsIGE6dmlzaXRlZCB7XG4gICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjYjVjMGQxXG4gICAgICB9XG4gICAgICBhOmhvdmVyLCBhLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjNDE1MTYxXG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L25hdj5cbikiXX0= */\n/*@ sourceURL=components/Navigation.js */'
  }));
};