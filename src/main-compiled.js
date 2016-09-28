'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _home = require('./page/home.vue');

var _home2 = _interopRequireDefault(_home);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _numbershipcenter = require('./page/numbershipcenter');

var _numbershipcenter2 = _interopRequireDefault(_numbershipcenter);

var _methodslist = require('./page/methodslist.vue');

var _methodslist2 = _interopRequireDefault(_methodslist);

var _userRegistration = require('./page/user-registration.vue');

var _userRegistration2 = _interopRequireDefault(_userRegistration);

var _userRegistrationSuccess = require('./page/user-registration-success.vue');

var _userRegistrationSuccess2 = _interopRequireDefault(_userRegistrationSuccess);

var _userForgotPassword = require('./page/user-forgot-password.vue');

var _userForgotPassword2 = _interopRequireDefault(_userForgotPassword);

var _userResetPassword = require('./page/user-reset-password.vue');

var _userResetPassword2 = _interopRequireDefault(_userResetPassword);

var _userResetSuccess = require('./page/user-reset-success.vue');

var _userResetSuccess2 = _interopRequireDefault(_userResetSuccess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FastClick = require('fastclick');
FastClick.attach(document.body);

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default();

router.map({
  // 首页
  '/': {
    component: _home2.default
  },
  // 用户中心
  '/numbershipcenter': {
    component: _numbershipcenter2.default
  },
  // H5配送方式
  '/deliver-methodslist': {
    component: _methodslist2.default
  },
  // h5用户注册
  '/userregister': {
    component: _userRegistration2.default
  },
  // h5用户注册成功
  '/userregistersuccess': {
    component: _userRegistrationSuccess2.default
  },
  // h5用户忘记密码
  '/userforgotpass': {
    component: _userForgotPassword2.default
  },
  // h5用户重设密码
  '/userresetpass': {
    component: _userResetPassword2.default
  },
  // h5用户重设密码成功
  '/userresetsuccess': {
    component: _userResetSuccess2.default
  }
});
router.start(_App2.default, '#app');

//# sourceMappingURL=main-compiled.js.map