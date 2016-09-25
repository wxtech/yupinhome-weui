'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _home = require('./components/home/home');

var _home2 = _interopRequireDefault(_home);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FastClick = require('fastclick');
FastClick.attach(document.body);

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default();

router.map({
  '/': {
    component: _home2.default
  }
});

router.start(_App2.default, '#app');

//# sourceMappingURL=main-compiled.js.map