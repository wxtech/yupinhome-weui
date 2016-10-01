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
```
正在进行的

```


H5配送方式.psd

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

