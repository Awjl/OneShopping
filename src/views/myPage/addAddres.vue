<template>
  <div class="addaddres">
    <div class="addaddreslist-inp">
      <input type="text" placeholder="收货人姓名" v-model="data.name">
      <span>必填</span>
    </div>
    <div class="addaddreslist-inp">
      <input type="text" placeholder="手机号码" v-model="data.mobile" @blur="OnBlur()">
      <span>{{content}}</span>
    </div>
    <div class="addaddreslist-inp" @click="setAddres()">
      {{data.city}}
      <span>必填</span>
    </div>
    <div class="addaddreslist-inp">
      <input type="text" placeholder="详细地址（街道、楼牌号等）" v-model="data.address">
      <span>必填</span>
    </div>
    <div class="addaddresbtn" @click="btn">保存</div>
    <Addres :addresStater="addresStater" v-on:Addres="Addres"></Addres>
  </div>
</template>

<script>
import Addres from "@/base/addres/addres";

let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

export default {
  data() {
    return {
      addresStater: false,
      content: "必填",
      data: {
        address: "",
        mobile: "",
        name: "",
        userId: "",
        zipCode: 0,
        city: "请选择省份、城市、县区",
        id: ""
      }
    };
  },
  methods: {
    Addres(Addres) {
      // childValue就是子组件传过来的值
      this.addresStater = false;
      if (!Addres) {
        this.data.city = "请选择省份、城市、县区";
      } else {
        this.data.city = `${Addres.Province}-${Addres.City}-${Addres.District}`;
      }
      // this.myList = childValue
    },
    setAddres() {
      this.addresStater = true;
    },
    OnBlur() {
      if (this.data.mobile) {
        if (phoneReg.test(this.data.mobile)) {
          this.content = "必填";
        } else {
          this.content = "格式不正确";
        }
      } else {
        this.content = "必填";
      }
    },
    btn() {
      if (this.$route.params.id === "null") {
        //   if (this.content == "必填" && this.data.mobile != "" && this.data.name != "" && this.data.address != "" && this.data.address != "") {
        //   }
        // } else {
        //   if (this.content == "必填" && this.data.mobile != "" && this.data.name != "" && this.data.address != "" && this.data.address != "") {
        //   }
      }
    }
  },
  components: {
    Addres
  }
};
</script>

<style scoped>
.addaddres {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.addaddreslist-inp {
  width: 100%;
  height: 93px;
  line-height: 93px;
  border-bottom: 1px solid #dcdcdc;
  color: #666;
  position: relative;
}
.addaddreslist-inp > span {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  height: 93px;
  line-height: 93px;
  color: red;
}
.addaddreslist-inp input {
  width: 100%;
  outline: none;
}
.addaddresbtn {
  width: 690px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #60d4ba;
  border-radius: 100px;
  margin-top: 200px;
  font-size: 30px;
  color: #fff;
}
</style>
