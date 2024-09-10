## API接口支付

此接口用于服务器后端发起支付请求，并返回支付二维码链接或支付跳转URL。

### 请求地址

`POST /xpay/epay/mapi.php`

### 请求参数

| 字段名       | 变量名       | 必填 | 类型   | 示例值                            | 描述                                   |
| ------------ | ------------ | ---- | ------ | --------------------------------- | -------------------------------------- |
| 商户ID       | pid          | 是   | Int    | 1001                              | 商户的唯一标识符                       |
| 支付方式     | type         | 是   | String | alipay                            | 支付方式列表                           |
| 商户订单号   | out_trade_no | 是   | String | 20160806151343349                 | 商户生成的唯一订单号                   |
| 异步通知地址 | notify_url   | 是   | String | http://www.pay.com/notify_url.php | 服务器异步通知地址                     |
| 跳转通知地址 | return_url   | 否   | String | http://www.pay.com/return_url.php | 页面跳转通知地址                       |
| 商品名称     | name         | 是   | String | VIP会员                           | 商品的名称                             |
| 商品金额     | money        | 是   | String | 1                                 | 商品的金额，单位为元，最多保留两位小数 |
| 用户IP地址   | clientip     | 是   | String | 192                               | .168.1.100	用户发起支付的IP地址        |
| 设备类型     | device       | 否   | String | pc                                | 用户所使用的浏览器或设备类型，默认为pc |
| 业务扩展参数 | param        | 否   | String | 没有请留空                        | 支付后原样返回                         |
| 签名字符串   | sign         | 是   | String | 202cb962ac59075b964b07152d234b70  | 签名算法点此查看                       |
| 签名类型     | sign_type    | 是   | String | MD5                               | 默认为MD5                              |

### 返回结果

返回结果为JSON格式，包含以下字段：

| 字段名        | 变量名    | 类型   | 示例值                                                                                   | 描述                      |
| ------------- | --------- | ------ | ---------------------------------------------------------------------------------------- | ------------------------- |
| 返回状态码    | code      | Int    | 1                                                                                        | 1表示成功，其他值表示失败 |
| 返回信息      | msg       | String | 失败时返回原因                                                                           |
| 订单号        | trade_no  | String | 20160806151343349                                                                        | 支付订单号                |
| 支付跳转URL   | payurl    | String | https://pay.com/pay/wxpay/202010903/	如果返回该字段，则直接跳转到该URL支付               |
| 二维码链接    | qrcode    | String | weixin://wxpay/bizpayurl?pr=04IPMKM	如果返回该字段，则根据该URL生成二维码                |
| 小程序跳转URL | urlscheme | String | weixin://dl/business/?ticket=xxx	如果返回该字段，则使用JS跳转该URL，可发起微信小程序支付 |

注：`payurl`、`qrcode`、`urlscheme`三个参数只会返回其中一个。

