<template>
  <section class="showChose" v-show="addresStater">
    <section class="address">
      <section class="title-heard">
        <div class="title-heardBox">
          <span @click="closeAdd()">×</span>
          <h4>居住地址</h4>
        </div>
      </section>
      <section class="title">
        <div class="area" @click="provinceSelected()">{{Province?Province:areaData[province-1].name}}</div>
        <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
        <div
          class="area"
          @click="districtSelected()"
          :class="District?'':'active'"
          v-show="City"
        >{{District?District:'请选择'}}</div>
      </section>
      <ul v-show="showProvince">
        <li
          class="addList"
          v-for="(v,k) in areaData"
          @click="getProvinceId(v.code, v.name, k)"
          :class="v.selected ? 'active' : ''"
          :key="k"
        >{{v.name}}</li>
      </ul>
      <ul v-show="showCity">
        <li
          class="addList"
          v-for="(v,k) in showCityList"
          @click="getCityId(v.code, v.name, k)"
          :class="v.selected ? 'active' : ''"
          :key="k"
        >{{v.name}}</li>
      </ul>
      <ul v-show="showDistrict">
        <li
          class="addList"
          v-for="(v,k) in showDistrictList"
          @click="getDistrictId(v.code, v.name, k)"
          :class="v.selected ? 'active' : ''"
          :key="k"
        >{{v.name}}</li>
      </ul>
      <!-- <ul>

        <li class="addList" v-for="(v,k2) in showCityList" @click="getCityId(v.id, v.name, k2)"  :class="v.selected ? 'active' : ''" :key="k2">{{v.name}}</li>
        <li class="addList" v-for="(v,k3) in showDistrictList" @click="getDistrictId(v.id, v.name, k3)"  :class="v.selected ? 'active' : ''" :key="k3">{{v.name}}</li>
      </ul>-->
    </section>
  </section>
</template>

<script>
import areaData from "./data.json";
console.log(areaData, "Huoqu shuju ");
export default {
  props: ["addresStater"],
  data() {
    return {
      areaData: areaData,
      showProvince: true,
      showCity: false,
      showDistrict: false,
      showCityList: false,
      showDistrictList: false,
      province: 1,
      city: 3,
      district: 57,
      GetProvinceId: 2,
      District: false,
      Province: false,
      City: false,
      Addres: {
        ProvinceCode: "",
        CityCode: "",
        DistrictCode: "",
        Province: "",
        City: "",
        District: ""
      },
      // v-for循环判断是否为当前
      selected: false
    };
  },
  methods: {
    choseAdd() {
      this.addresStater = true;
    },
    closeAdd() {
      // this.addresStater = false;
      this.$emit("Addres");
    },
    _filter(add, name, code) {
      let result = [];
      for (let i = 0; i < add.length; i++) {
        if (code == add[i].code) {
          result = add[i][name];
        }
      }
      return result;
    },
    getProvinceId(code, input, index) {
      console.log(code, input, index);
      this.province = code;
      this.Province = input;
      this.Addres.Province = this.Province;
      this.Addres.ProvinceCode = this.province;
      // province: 1,
      // city: 3,
      // district: 57,
      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;

      this.showCityList = this._filter(this.areaData, "sub", this.province);
      // 点击选择当前
      this.areaData.map(a => (a.selected = false));
      this.areaData[index].selected = true;
    },
    provinceSelected() {
      // 清除市级和区级列表
      this.showCityList = false;
      this.showDistrictList = false;
      // 清除市级和区级选项
      this.City = false;
      this.District = false;
      // 选项页面的切换
      this.showProvince = true;
      this.showCity = false;
      this.showDistrict = false;
    },
    getCityId(code, input, index) {
      this.city = code;
      this.City = input;
      this.Addres.City = this.City;
      this.Addres.CityCode = this.city;
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;

      this.showDistrictList = this._filter(this.showCityList, "sub", this.city);
      // 选择当前添加active
      this.showCityList.map(a => (a.selected = false));
      this.showCityList[index].selected = true;
    },
    citySelected() {
      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;
    },
    getDistrictId(code, input, index) {
      this.district = code;
      this.District = input;
      this.Addres.District = this.District;
      this.Addres.DistrictCode = this.district;
      // 选择当前添加active
      this.showDistrictList.map(a => (a.selected = false));
      this.showDistrictList[index].selected = true;
      // 选取市区选项之后关闭弹层
      // this.addresStater = false;
      console.log(this.Addres);
      this.$emit("Addres", this.Addres);
    },
    districtSelected() {
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;
    }
  }
};
</script>

<style>
.myAddress {
  width: 100%;
  background-color: white;
  border-top: 4px solid rgba(245, 245, 245, 1);
  color: #333;
}
.myAddress .cont {
  border-bottom: 1px solid rgba(245, 245, 245, 0.8);
}
.myAddress .cont span {
  display: inline-block;
  font-size: 0.28rem;
  color: #333;
  line-height: 0.88rem;
  margin-left: 0.32rem;
}
.myAddress .cont section {
  float: left;
}
.myAddress .cont p {
  display: inline-block;
  font-size: 0.28rem;
  color: #333333;
  line-height: 0.88rem;
  margin-left: 1rem;
}
.myAddress .cont .pic2 {
  float: right;
  width: 0.14rem;
  height: 0.24rem;
  margin: 0.32rem 0.32rem 0.32rem 0;
}
.myAddress .cont p.text {
  margin-left: 0.72rem;
}
.showChose {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  background: rgba(77, 82, 113, 0.8);
}
.address {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 121;
  background: #fff;
  width: 100%;
}
.title-heard {
  width: 100%;
  display: flex;
  direction: rtl;
}
.title-heardBox {
  width: 100%;
  line-height: 0.88rem;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
}
.title-heardBox h4 {
  color: #999;
}
.title-heardBox span {
  color: #d8d8d8;
  font-size: 40px;
}
.title h4 {
  display: inline-block;
  margin-left: 3.2rem;
  font-size: 0.32rem;
  line-height: 0.88rem;
  font-weight: normal;
  color: #999;
}
.title span {
  margin: 0.42rem 0 0 2.2rem;
  font-size: 0.45rem;
  line-height: 0.34rem;
  color: #d8d8d8;
}
.area {
  display: inline-block;
  font-size: 0.24rem;
  line-height: 0.88rem;
  margin-left: 0.42rem;
  color: #333;
  padding: 0 !important;
}
.addList {
  width: 100%;
  padding-left: 0.32rem;
  font-size: 0.34rem;
  line-height: 0.88rem;
  color: #333;
}
/* 修改的格式 */
.address ul {
  width: 95%;
  height: 84vw;
  overflow: auto;
}
.address ul li {
  padding-left: 5%;
  box-sizing: border-box;
}
.address .title .active {
  color: #0071b8;
  border-bottom: 0.02rem solid #0071b8;
}
.address ul .active {
  color: #0071b8;
}
</style>
