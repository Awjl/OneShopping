<template>
  <div class="TrueOrder">
    <div class="OrderAddres" v-if="addState" @click="putDefault()">+ 添加收货地址</div>
    <div class="OrderAddresall" v-if="!addState" @click="putDefault()">
      <div class="myaddtitle">
        <span>收货人:{{addressinfo.contacter}}</span>
        <span>{{addressinfo.mobile}}</span>
      </div>
      <p>{{addressinfo.provinceName}}{{addressinfo.cityName}}{{addressinfo.areaName}}{{addressinfo.street}}</p>
    </div>
    <div class="orderLine"></div>
    <div class="OrederList">
      <div
        class="shoppingItemContent"
        v-for="(item, index) in myform.lineItems[0].value"
        :key="index"
      >
        <div class="shoppingItemContentImg">
          <img :src="item.mainImg | formatImg160x160" alt />
        </div>
        <div class="shoppingItemNoEdit">
          <p>{{item.catalogName}}</p>
          <p>{{item.name}}</p>
          <p>
            <span class="col">￥{{item.price | formatFee}}</span>
            <span>x{{item.quantity}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderOption">
      <div class="OrderOptionItem" @click="goUseCoupon">
        <p>败家券</p>
        <p class="OrderOptionItemNum">
          <span>{{myform.lineItems[0].key.myCoupons.length}}个可用</span>
          <i class="myicon righticon"></i>
        </p>
      </div>
      <div class="OptionItemLine"></div>
      <!-- <div class="OrderOptionItem" @click="goUseBell">
        <p>铃铛账户</p>
        <p class="OrderOptionItemNum">
          <span>2个可用</span>
          <i class="myicon righticon"></i>
        </p>
      </div>-->
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderOption">
      <div class="OrderOptionItem">
        <p>商品合计</p>
        <p class="OrderOptionItemTolat">￥{{totalfee.total | formatFee}}</p>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderOption">
      <div class="OrderOptionItem">
        <p>配送方式</p>
        <p>商家配送</p>
      </div>
    </div>
    <div class="orderLineBg"></div>
    <div class="OrderPayBox">
      <span>应付：¥{{totalfee.total | formatFee}}</span>
      <p @click="goPayOrder">哦了</p>
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from "we-vue";

import {
  GetAddresses,
  PutQuickFee,
  PostH5,
  GetWxJsApiPay
} from "@/api/love/love";
import { configData } from "@/utils/config";

export default {
  name: "trueOrder",
  data() {
    return {
      addState: true,
      coupon: {},
      myform: {
        lineItems: [
          {
            key: {
              myCoupons: []
            }
          }
        ]
      },
      order: null,
      totalfee: {
        couponDiscount: ""
      }, //全部费用
      addressinfo: {}, //地址信息
      msg: ""
    };
  },
  created() {
    if (window.sessionStorage.getItem("coupon")) {
      console.log(window.sessionStorage.getItem("coupon"));
      this.coupon = JSON.parse(window.sessionStorage.getItem("coupon"));
      window.sessionStorage.removeItem("coupon");
    }
    // if (window.sessionStorage.getItem("prepareOrder")) {
    this.myform = JSON.parse(window.sessionStorage.getItem("prepareOrder"));
    // window.sessionStorage.removeItem("prepareOrder");
    // }
    console.log(this.myform);
    //实时获取订单费用
    let skuInfo = this.myform.lineItems[0].value;
    let data = {
      couponId: this.coupon.id,
      items: skuInfo
    };
    this.PutQuickFee(data);
  },
  mounted() {
    this.GetAddresses();
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener(
          "WeixinJSBridgeReady",
          this.onBridgeReady,
          false
        );
      } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", this.onBridgeReady);
        document.attachEvent("onWeixinJSBridgeReady", this.onBridgeReady);
      }
    }
  },
  methods: {
    // 获取地址
    GetAddresses() {
      GetAddresses()
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("获取地址---------");
            console.log(res.data[0]);
            if (res.data.length > 0) {
              this.addState = false;
              Object.assign(this.addressinfo, res.data[0]);
            } else {
              this.addState = true;
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // putDefault
    putDefault() {
      this.$router.push({
        path: "/myAddres",
        query: {
          type: "put"
        }
      });
    },
    // 事实获取费用
    PutQuickFee(data) {
      PutQuickFee(data)
        .then(res => {
          if (res.code === configData.codeState) {
            console.log("获取费用---------");
            console.log(res.data);
            // Object.assign(this.totalfee, res.data);
            this.totalfee = res.data;
            if (res.data.couponDiscount == 0 && this.coupon.id) {
              this.msg =
                "满" + (this.coupon.limitFee / 100).toFixed(2) + "可用";
              Toast.text(this.msg);
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //
    onBridgeReady() {
      if (this.order != null) {
        let that = this;
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: this.order.wxPayInfo.appid, //公众号名称，由商户传入
            timeStamp: this.order.wxPayInfo.timeStamp, //时间戳，自1970年以来的秒数
            //"timeStamp": new Date().getTime()/1000,         //时间戳，自1970年以来的秒数
            nonceStr: this.order.wxPayInfo.nonce_str, //随机串
            package: this.order.wxPayInfo.pkg,
            signType: "MD5", //微信签名方式：
            paySign: this.order.wxPayInfo.paySign //微信签名
          },
          function(res) {
            WeixinJSBridge.log(res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // alert(this.order.returnUrl);
              // window.location.href = this.order.returnUrl;
              // window.location.href =
              //   "http://m.mildland.cn/html/myshop/my-form.html?tid=3";
              that.goMyOrder();
            } else {
              if (res.err_msg == "get_brand_wcpay_request:cancel") {
                //window.history.go(-1);
                //alert("您已取消！");
              } else {
                //window.history.go(-1);
                //alert("支付失败！！");
              }
            }
          }
        );
      }
    },
    // 获取微信配置
    GetWxJsApiPay(id) {
      GetWxJsApiPay(id)
        .then(res => {
          if (res.code === configData.codeState) {
            this.order = res.data;
            console.log(this.order);
            this.onBridgeReady();
          } else {
            Toast.text(res.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    goPayOrder() {
      if (!this.addressinfo) {
        Dialog.alert({
          title: title,
          message: "请填写收货地址"
        });
      } else {
        var item = this.myform.lineItems[0];
        let data = {
          addressId: this.addressinfo.id,
          catalogId: item.value[0].catalogId,
          couponId: this.coupon.id,
          items: item.value,
          shopId: item.key.id,
          // "returnUrl": encodeURIComponent(window.location.href)
          returnUrl: "http://www.mayeinfo.com/pet"
        };
        console.log(data);
        PostH5(data)
          .then(res => {
            if (res.code === configData.codeState) {
              console.log(res.data.id);
              this.GetWxJsApiPay(res.data.id);
            } else {
              // $.toast(res.message, "text");
              Toast.text(res.message);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
        // var url = config.API_GATEWAY + "/td/orders/quick/h5";
        // Api.post(url, data, function(res) {
        //   if (res.code == 0) {
        //     var url =
        //       config.API_GATEWAY + "/td/orders/" + res.data.id + "/wxJsApiPay";
        //     Api.get(url, function(e) {
        //       if (e.code == 0) {
        //         this.order = e.data;
        //         this.onBridgeReady();
        //       } else {
        //         $.toast(e.message, "text");
        //       }
        //     });
        //   } else {
        //     $.toast(res.message, "text");
        //   }
        // });
      }
      // this.$router.push({
      //   path: "/PayOrder"
      // });
    },
    goUseCoupon() {
      this.$router.push({
        path: "/UseCoupon",
        query: {
          type: "order"
        }
      });
    },
    goMyOrder() {
      this.$router.push({
        path: "/MyOrder",
        query: {
          type: 2
        }
      });
    },
    goUseBell() {
      this.$router.push({
        path: "/UseBell"
      });
    }
  }
};
</script>

<style lang="scss">
.TrueOrder {
  padding-bottom: 100px;
  .OrderAddres {
    margin: 20px 30px 0;
    height: 136px;
    background: #f2f2f2;
    font-size: 22px;
    color: #101010;
    letter-spacing: 0.61px;
    line-height: 136px;
    text-align: center;
  }
  .OrderAddresall {
    margin: 20px 30px 0;
    padding: 0 20px;
    height: 136px;
    background: #f2f2f2;
    color: #101010;
    .myaddtitle {
      height: 68px;
      line-height: 68px;
      color: #9b9b9b;
      font-size: 24px;

      letter-spacing: 1px;
      span {
        margin-right: 30px;
      }
    }
    p {
      height: 68px;
      line-height: 68px;
      font-size: 24px;

      color: #9b9b9b;
      letter-spacing: 1px;
    }
  }
  .orderLine {
    margin: 50px 30px 0;
    height: 2px;
    background: #dcdcdc;
  }
  .orderLineBg {
    width: 100%;
    height: 20px;
    background: #f2f2f2;
  }
  .OrederList {
    padding: 0 30px;
    .shoppingItemContent {
      width: 100%;
      height: 194px;
      padding: 20px 0;
      box-sizing: border-box;
      border-bottom: 2px solid #dcdcdc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shoppingItemContentImg {
        width: 136px;
        height: 136px;
      }
      .shoppingItemNoEdit {
        width: 466px;
        height: 134px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 28px;
          color: #666666;
          letter-spacing: 1px;
        }
        p:nth-child(2) {
          font-size: 24px;
          color: #999999;
          letter-spacing: 1px;
        }
        p:nth-child(3) {
          font-size: 24px;
          color: #666666;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .col {
            font-size: 30px;
            color: #60d4ba;
            font-weight: bold;
          }
        }
      }
    }
  }
  .OrderOption {
    padding: 0 30px;
    .OrderOptionItem {
      padding: 24px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28px;
      color: #222222;
      letter-spacing: 0.78px;
      p:nth-child(2) {
        display: flex;
        align-items: center;
      }
      .OrderOptionItemNum {
        span {
          padding: 5px 10px;
          border: 2px solid #ef6866;
          border-radius: 100px;
          font-size: 24px;
          color: #ed6969;
          letter-spacing: 0.67px;
          margin-right: 20px;
        }
      }
      .OrderOptionItemTolat {
        font-size: 28px;
        color: #60d4ba;
        letter-spacing: 0.78px;
      }
    }
    .OptionItemLine {
      width: 100%;
      height: 2px;
      background: #dcdcdc;
    }
  }
  .OrderPayBox {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    span {
      font-size: 28px;
      color: #60d4ba;
      letter-spacing: 1px;
    }
    p {
      width: 230px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: #60d4ba;
      color: #fff;
      border-radius: 44px;
      font-size: 28px;
      color: #ffffff;
      letter-spacing: 1px;
      text-align: center;
    }
  }
}
</style>
