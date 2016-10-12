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

h5申请售后psd

h5确认订单psd

h5确认订单-预付定金psd

H5现金支付psd

H5支付成功psd

```
H5收货地址管理psd

H5收货地址管理编辑psd

H5提醒登录页psd

H5我的预约psd
```
正在进行的...






```



##编译结果目录:
```
dist
```
让静态服务器指向这个目录就可以了。

相当路由机制src/main.js

```

router.map({
  // 首页 && 提醒登录页
  '/': {
    component: Home
  },
  // 用户中心
  '/numbershipcenter': {
    component: numbershipcenter
  },
  // H5配送方式
  '/deliverMethodslist': {
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
  // h5商品分类-品牌检索
  '/categorybrand': {
    component: categorybrand
  },
  //商品检索
  '/categorysearch': {
    component: categorysearch
  },
  //商品详情
  '/goodsdetail': {
    component: goodsdetail
  },
  //品牌信息
  '/brandinformation': {
    component: brandinformation
  },
  //品牌详情
  '/branddetails': {
    component: branddetails
  },
  //等待审核
  '/waitreview': {
    component: waitreview
  },
  //订单管理
  '/orderlist': {
    component: orderlist
  },
  //购物车
  '/shopcart': {
    component: shopcart
  },
  //积分明细
  '/integraldetail': {
    component: integraldetail
  },
  //积分商城
  '/integralmall': {
    component: integralmall
  },
  //积分商品详情
  '/productdetails': {
    component: productdetails
  },
  //可换购商品
  '/categorychange': {
    component: categorychange
  },
  //联系客服
  '/contactcustomer': {
    component: contactcustomer
  },
  //评价商品
  '/ugc': {
    component: ugc
  },
  //审请售后
  '/applysales': {
    component: applysales
  },
  //确认订单 && 确认订单-预约订金
  '/makesureorder': {
    component: makesureorder
  },
  //现金支付
  '/cashpay': {
    component: cashpay
  },
  //支付成功
  '/paysuccess': {
    component: paysuccess
  },
  //收货地址管理 && 收货地址管理-编辑
  '/receiptaddress': {
    component: receiptaddress
  },
  //我的预约
  '/myreservation': {
    component: myreservation
  },
  // H5我的售后.psd H5我的售后-返修.psd H5我的售后－退换货.psd
  '/aftersalesRepair': {
    component: aftersalesRepair
  },
  // 我的收藏
  '/mybookmark': {
    component: mybookmark
  },
  // 我的权利
  '/myRight': {
    component: myRight
  },
  // 我的资料
  '/myData': {
    component: myData
  },
  // 我的客服
  '/mycustomservice': {
    component: mycustomservice
  },
  // H5账号管理
  '/accountmanager': {
    component: accountmanager
  },
  // H5消息管理.psd
  '/messagemanager': {
    component: messagemanager
  },
  // H5申请预约.psd
  '/applyreservation': {
    component: applyreservation
  }

});
```

###比如:查看方法为hash 如查看'h5用户重设密码成功' 页
```
http://localhost:8080/#!/userresetsuccess
```
## 安装

``` bash
# install dependencies //安装依赖
npm install

# serve with hot reload at localhost:8080 //本地服务器
npm run dev

# build for production with minification//  打包,合并页面 并生成在dist文件夹下
npm run build

```

