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

if (!window) {
  var _window = { location: { 'pathname': "" } };
}

exports.default = function () {
  return _react2.default.createElement('nav', {
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', {
    className: window.location.pathname === '/' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', {
    className: window.location.pathname === '/blog' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', {
    className: window.location.pathname === '/contact' ? 'active' : '',
    'data-jsx': 3267681474,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 3267681474,
    css: 'a[data-jsx="3267681474"],a[data-jsx="3267681474"]:visited{margin:1em;text-decoration:none;color:#b5c0d1}a[data-jsx="3267681474"]:hover,a.active[data-jsx="3267681474"]{color:#415161}nav[data-jsx="3267681474"]{margin-bottom:1em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmdCLEFBR29CLEFBTWQsQUFFcUIsV0FQRyxHQUt2QixJQUdBLGNBTkQsY0FBQyIsImZpbGUiOiJjb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGUucGVhY29jay9jb2RlL3BlcnNvbmFsLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIE5leHQuanMgdXNlcyB0aGVzZSBMaW5rIGNvbXBvbmVudHMgZm9yIGNyb3NzLXBhZ2Ugcm91dGluZ1xuXG5pZiAoIXdpbmRvdyl7XG4gIGNvbnN0IHdpbmRvdyA9IHtsb2NhdGlvbjogeydwYXRobmFtZSc6IFwiXCJ9fVxufVxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8bmF2PlxuICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgPGEgXG4gICAgICAgIGNsYXNzTmFtZT17d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PScvJyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICA+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj0nL2Jsb2cnPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09Jy9ibG9nJyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICA+QmxvZzwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09Jy9jb250YWN0JyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICA+Q29udGFjdDwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYSwgYTp2aXNpdGVkIHtcbiAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNiNWMwZDFcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIsIGEuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICM0MTUxNjFcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbmF2PlxuKSJdfQ== */\n/*@ sourceURL=components/Navigation.js */'
  }));
};