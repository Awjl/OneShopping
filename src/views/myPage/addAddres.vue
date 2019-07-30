<template>
  <div class="addaddres">
    <div class="addaddreslist-inp">
      <input type="text" placeholder="收货人姓名" v-model="data.contacter" />
      <span>必填</span>
    </div>
    <div class="addaddreslist-inp">
      <input type="text" placeholder="手机号码" v-model="data.mobile" @blur="OnBlur()" />
      <span>{{content}}</span>
    </div>
    <div class="addaddreslist-inp" @click="setAddres()">
      {{selectedRegion}}
      <span>必填</span>
    </div>
    <div class="addaddreslist-inp">
      <input type="text" placeholder="详细地址（街道、楼牌号等）" v-model="data.street" />
      <span>必填</span>
    </div>
    <div class="addaddresbtn" @click="btn">保存</div>
    <Addres :addresStater="addresStater" @Addres="Addres"></Addres>
  </div>
</template>

<script>
import { Toast } from "we-vue";

import Addres from "@/base/addres/addres";
import { getAddressesOne, addresses } from "@/api/user/user";
import { configData } from "@/utils/config";

let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

export default {
  data() {
    return {
      addresStater: false,
      content: "必填",
      data: {},
      selectedRegion: "请选择省份、城市、县区",
      UpForm: {
        areaId: "",
        contacter: "",
        mobile: "",
        street: ""
      },
      id: ""
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  mounted() {
    if (this.id) {
      this.getAddressesOne(this.id);
    }
  },
  methods: {
    // 获取详细地址
    getAddressesOne(id) {
      getAddressesOne(id)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("详细地址=====================");
            console.log(data);
            this.selectedRegion = `${data.provinceName}-${data.cityName}-${data.areaName}`;
            this.data = data;
            // this.data.address = data.street;
            // this.data.mobile = data.mobile;
            // this.data.name = data.contacter;
            // this.data.userId = data.userId;
            // this.data.id = data.id;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    Addres(Addres) {
      // childValue就是子组件传过来的值
      this.addresStater = false;
      if (!Addres) {
        this.selectedRegion = "请选择省份、城市、县区";
      } else {
        console.log(Addres);
        this.selectedRegion = `${Addres.Province}-${Addres.City}-${Addres.District}`;
        console.log(Addres.DistrictCode, '地区编码');
        this.areaId  = Addres.DistrictCode;
      }
      // this.myList = childValue
    },
    setAddres() {
      this.addresStater = true;
    },
    // 添加地址
    addresses() {
      addresses(this.data)
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("保存成功=====================");
            // console.log(data);
            // this.addressInfo = data;
            // Object.assign(this.useInfo, data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
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
      if (!this.data.areaId || !this.data.street || !this.data.mobile) {
        Toast.text("请完善收货信息");
        return;
      }
      this.addresses();
      // if (this.$route.query.id === "null") {
      //   this.addresses();
      //   //   if (this.content == "必填" && this.data.mobile != "" && this.data.name != "" && this.data.address != "" && this.data.address != "") {
      //   //   }
      //   // } else {
      //   //   if (this.content == "必填" && this.data.mobile != "" && this.data.name != "" && this.data.address != "" && this.data.address != "") {
      //   //   }
      // }
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
