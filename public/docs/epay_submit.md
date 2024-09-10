## 页面跳转支付

此接口可用于用户前台直接发起支付，使用 form 表单跳转或拼接成 URL 跳转。

### 请求地址

`POST /xpay/epay/submit.php`

### 请求参数

| 字段名       | 变量名       | 必填 | 类型   | 示例值                            | 描述                                   |
| ------------ | ------------ | ---- | ------ | --------------------------------- | -------------------------------------- |
| 商户ID       | pid          | 是   | Int    | 1001                              | 商户的唯一标识符                       |
| 支付方式     | type         | 是   | String | alipay                            | 支付方式列表                           |
| 商户订单号   | out_trade_no | 是   | String | 20160806151343349                 | 商户系统内部的订单号                   |
| 异步通知地址 | notify_url   | 是   | String | http://www.pay.com/notify_url.php | 服务器异步通知地址                     |
| 跳转通知地址 | return_url   | 是   | String | http://www.pay.com/return_url.php | 页面跳转通知地址                       |
| 商品名称     | name         | 是   | String | VIP                               | 商品的名称 如超过 127 个字节会自动截取 |
| 商品金额     | money        | 是   | String | 1                                 | 商品的金额，单位为元，最多保留两位小数 |
| 业务扩展参数 | param        | 否   | String | 没有请留空                        | 支付后原样返回                         |
| 签名字符串   | sign         | 是   | String | 202cb962ac59075b964b07152d234b70  | 签名算法点此查看                       |
| 签名类型     | sign_type    | 是   | String | MD5                               | 默认为 MD5                             |

### 返回结果

用户前台可使用 form 表单提交或拼接成 URL 进行跳转支付。

