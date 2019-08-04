<template>
  <div class="vipBox">
    <div class="vip-bg"></div>
    <div class="vip-heard">请选择:</div>
    <div class="vip-boxList">
      <div
        v-for="(item, index) in vipData"
        :key="index"
        class="vip-boxItem"
        :class="{vipboxItemAct : actIndex === item.id}"
        @click="selectIndex(item.id, index)"
      >
        <p>{{item.name}}</p>
        <div>
          ¥
          <span>{{item.price | formatFee}}</span>
        </div>
      </div>
      <!-- <div
        class="vip-boxItem"
        :class="{vipboxItemAct : actIndex === '2'}"
        @click="selectIndex('2')"
      >
        <p>季卡套餐</p>
        <div>
          ¥
          <span>25</span>/季
        </div>
      </div>-->
      <!-- <div
        class="vip-boxItem"
        :class="{vipboxItemAct : actIndex === '3'}"
        @click="selectIndex('3')"
      >
        <p>年卡套餐</p>
        <div>
          ¥
          <span>99</span>/年
        </div>
      </div>-->
    </div>
    <div class="vipboxList-botton" @click="kaitong">立即开通</div>
    <div class="vipLine"></div>
    <div class="vipListqx">
      <div class="vipListqx-titel">VIP特权</div>
      <div class="my-vip-list"></div>
    </div>
    <div class="vipLine"></div>
    <div class="vip-text">
      <p class="vip-text-tite;">使用说明：</p>
      <p>购买有效期内，会员可以享受所有会员商品专享价，</p>
      <p>多买多省。</p>
      <p>本套餐不自动续订，过期后用户请再次购买会员。</p>
      <p>如您有任何问题，请随时联系我们：0000-1234567</p>
    </div>
  </div>
</template>
<script>
import { queryVipPlan, wxJsApiPay } from "@/api/user/user";
import { configData } from "@/utils/config";
import { Toast, Dialog } from "we-vue";
import { GetWxJsApiPay } from "@/api/love/love";
export default {
  data() {
    return {
      actIndex: "1",
      vipData: [],
      typeInde: 0,
      userId: "",
      wxPay: {
        appid: "wxa88fd2810fd475a6",
        code_url: null,
        err_code: null,
        err_code_des: null,
        mch_id: "1518272241",
        nonce_str: "rgWgHrrpl4VNyilc",
        paySign: "9202DA29FE868D0E3A4A3271CD3DA5AF",
        pkg: "prepay_id=wx041532071034690daed0618c1721165900",
        prepay_id: "wx041532071034690daed0618c1721165900",
        result_code: "SUCCESS",
        return_code: "SUCCESS",
        return_msg: "OK",
        sign: "65DA4A4B9B132DEB15997965A1C344F6",
        signType: "MD5",
        timeStamp: "1564903927",
        trade_type: "JSAPI"
      }
    };
  },
  created() {
    this.userId = JSON.parse(window.sessionStorage.getItem("userData"))
      ? JSON.parse(window.sessionStorage.getItem("userData")).uid
      : "";
  },
  mounted() {
    this.queryVipPlan();
  },
  methods: {
    // 获取vip
    queryVipPlan() {
      queryVipPlan()
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("会员=====================");
            this.vipData = data;
            this.actIndex = this.vipData[0].id;
            this.typeInde = 0;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    selectIndex(val, index) {
      this.actIndex = val;
      this.typeInde = index;
    },
    onBridgeReady() {
      console.log(this.wxPay);
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: this.wxPay.appid, //公众号名称，由商户传入
          timeStamp: this.wxPay.timeStamp, //时间戳，自1970年以来的秒数
          //"timeStamp": new Date().getTime()/1000,         //时间戳，自1970年以来的秒数
          nonceStr: this.wxPay.nonce_str, //随机串
          package: this.wxPay.pkg,
          signType: "MD5", //微信签名方式：
          paySign: this.wxPay.paySign //微信签名
        },
        function(res) {
          WeixinJSBridge.log(res.err_msg);
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // alert(this.order.returnUrl);
            // window.location.href = this.order.returnUrl;
            // window.location.href =
            //   "http://m.mildland.cn/html/myshop/my-form.html?tid=3";
            Toast.text("感谢您成为一只商店的会员");
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
    },
    goMyOrder() {
      this.$router.push({
        path: "/My"
      });
    },
    // 开通
    kaitong() {
      // wxJsApiPay
      let data = {
        name: this.vipData[this.typeInde].name,
        num: 1,
        price: this.vipData[this.typeInde].price,
        userId: this.userId,
        vipPlanId: this.vipData[this.typeInde].id
      };
      console.log(data);
      //   return;
      wxJsApiPay(data)
        .then(res => {
          if (res.code === configData.codeState) {
            // console.log(res.data.id);
            this.wxPay = res.data;
            // this.GetWxJsApiPay(res.data.id);
            this.onBridgeReady();
          } else {
            // $.toast(res.message, "text");
            Toast.text(res.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.vip-bg {
  width: 100%;
  height: 220px;
}
.vip-heard {
  padding: 40px 80px 20px;
  font-size: 30px;
  color: #222222;
  letter-spacing: 0.5px;
}
// #E2B24F 100%
.vip-boxList {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .vip-boxItem {
    width: 200px;
    height: 230px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 12px 2px #fff2d7;

    div {
      margin-top: 30px;
      font-size: 36px;
      color: #e2b24f;
      letter-spacing: 5.33px;
      span {
        font-size: 40px;
      }
    }
  }
  .vipboxItemAct {
    // background: #e2b24f;
    box-sizing: border-box;
    border: 2px solid #e2b24f;
  }
}
.vipboxList-botton {
  width: 440px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  background: #e2b24f;
  border-radius: 100px;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1px;
  margin: 40px auto;
}
.vipLine {
  width: 100%;
  height: 20px;
  background: #f2f2f2;
}
.vipListqx {
  width: 100%;
  background: #fff;
  padding: 30px 0px 0;
  box-sizing: border-box;
  .vipListqx-titel {
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 28px;
    color: #4a4a4a;
    letter-spacing: 1.56px;
  }
  .my-vip-list {
    width: 100%;
    height: 400px;
  }
}
.vip-text {
  padding: 40px;
  box-sizing: border-box;
  p {
    font-size: 24px;
    color: #222222;
    letter-spacing: 0.5px;
    line-height: 40px;
  }
}
</style>
