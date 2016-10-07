# yupinhome-weui

完成:
```
H5首页final.psd

H5会员中心.psd

h5用户注册.psd

h5用户注册成功.psd

h5会员中心-推荐朋友.psd

h5用户忘记密码.psd

h5用户重设密码.psd

h5用户重设密码成功.psd

h5安全中心.psd

h5商品分类.psd

H5商品分类-品牌检索.psd

H5商品检索PSD

H5商品详情psd

H5商品详情-分享PSD

h5品牌信息psd

h5品牌详情psd

h5等待审核psd

h5订单管理psd

h5购物车psd

H5配送方式.psd

H5我的收藏

H5我的权利

H5我的资料

H5我的客服

H5我的客服-申请换客服.psd

H5账号管理.psd

H5消息管理.psd


h5积分明细psd

h5积分商城psd

h5积分商品详情psd

h5可换购商品psd

h5联系客服psd

h5评价商品psd
```
正在进行的
h5申请售后psd

h5确认订单psd

h5确认订单-预付定金psd

```



##编译结果目录:
```
dist
```
让静态服务器指向这个目录就可以了。

相当路由机制src/main.js
```
router.map({
  // 首页
  '/': {
    component: Home
  },
  // 用户中心
  '/numbershipcenter': {
    component: numbershipcenter
  },
  // H5配送方式
  '/deliver-methodslist': {
    component: deliverMethodslist
  },
  // h5用户注册
  '/userregister': {
    component: userregister
  },
  // h5用户注册成功
  '/userregistersuccess': {
    component: userregistersuccess
  },
  // h5用户忘记密码
  '/userforgotpass': {
    component: userforgotpass
  },
  // h5用户重设密码
  '/userresetpass': {
    component: userresetpass
  },
  // h5用户重设密码成功
  '/userresetsuccess': {
    component: userresetsuccess
  },
  // h5安全中心
  '/securitycenter': {
    component: securitycenter
  },
  // H5商品分类.psd
  '/categorylist': {
    component: categorylist
  },
  '/categorybrand': {
    component: categorybrand
  }
})

```
###比如:查看方法为hash 如查看'h5用户重设密码成功' 页
```
http://localhost:8080/#!/userresetsuccess
```
## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

