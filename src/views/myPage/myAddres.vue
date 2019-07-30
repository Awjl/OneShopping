<template>
  <div class="myAddres">
    <ul>
      <li class="myadd-item" v-for="(item,index) in addressInfo " data-type="0" :key="index">
        <div
          class="myadd-box"
          @touchstart.capture="touchStart"
          @touchend.capture="touchEnd"
          @click="skip(item.id)"
        >
          <div class="myadd-content">
            <div class="myadd-left">
              <div class="myaddtitle">
                <span>{{item.contacter}}</span>
                <span>{{item.mobile}}</span>
              </div>
              <p>{{item.provinceName}}{{item.cityName}}{{item.areaName}}{{item.street}}</p>
            </div>
            <div class="myadd-right" @click.stop="addAddres(item.id)">
              修改
              <i class="myicon righticon"></i>
            </div>
          </div>
        </div>
        <div class="delete" @click="deleteItem(index, item.id)" :data-index="index">删除</div>
      </li>
    </ul>
    <div class="addAddres" @click="addAddres(null)">+添加收货信息</div>
  </div>
</template>

<script>
import { getAddresses } from "@/api/user/user";
import { configData } from "@/utils/config";

export default {
  data() {
    return {
      list: [
        {
          name: "名字",
          mobile: "13000000000",
          city: "上海",
          address: "徐汇区",
          id: 1
        },
        {
          name: "名字",
          mobile: "13000000000",
          city: "上海",
          address: "徐汇区",
          id: 1
        }
      ],
      addressInfo: [],
      startX: 0,
      endX: 0
    };
  },
  mounted() {
    this.getAddresses();
  },
  methods: {
    // 获取地址列表
    getAddresses() {
      getAddresses()
        .then(({ code, data, message }) => {
          if (code === configData.codeState) {
            console.log("地址列表=====================");
            console.log(data);
            this.addressInfo = data;
            // Object.assign(this.useInfo, data);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 跳转
    skip() {
      if (this.checkSlide()) {
        this.restSlide();
      } else {
        // if (this.$route.params.type === "1") {
        //   this.$store.commit('SET_ADDRES', id)
        //   console.log(this.AddresId)
        //   this.$router.back(-1)
        // }
      }
    },
    // 滑动开始
    touchStart(e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX;
    },
    // 滑动结束
    touchEnd(e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (parentElement.dataset.type === "0" && this.startX - this.endX > 30) {
        this.restSlide();
        parentElement.dataset.type = "1";
      }
      // 右滑
      if (parentElement.dataset.type === "1" && this.startX - this.endX < -30) {
        this.restSlide();
        parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
    },
    // 判断当前是否有滑块处于滑动状态
    checkSlide() {
      let listItems = document.querySelectorAll(".list-item");
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type === "1") {
          return true;
        }
      }
      return false;
    },
    // 复位滑动状态
    restSlide() {
      let listItems = document.querySelectorAll(".list-item");
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = "0";
      }
    },
    // 删除
    deleteItem(index, id) {
      // 当前索引
      // 复位
      this.restSlide();
      // 删除
      this.list.splice(index, 1);
      this._deleteAddressById(id);
    },
    addAddres(id) {
      this.$router.push({
        path: "/AddAddres",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="scss">
.myAddres {
  padding-top: 20px;
}
ul {
  // width: 100%;
  overflow: hidden;
  margin: 0 30px;
  li {
    margin-bottom: 20px;
  }
}
.myaddline {
  width: 100%;
  height: 10px;
  background: #f2f2f2;
}
.myadd-item {
  position: relative;
  height: 136px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.myadd-item[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
.myadd-item[data-type="1"] {
  transform: translate3d(-100px, 0, 0);
}

.myadd-box {
  background: #f2f2f2;
  display: flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
}
.myadd-content {
  padding: 0 50px;
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
.myadd-item span {
  display: block;
  color: #333;
  overflow: hidden;
  font-size: 28px;
  color: #4a4a4a;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.myaddtitle {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.myadd-left p {
  margin-top: 20px;
  font-size: 24px;
  color: #9b9b9b;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.myadd-right {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: 0.67px;
}
.myadd-right img {
  width: 28px;
  height: 28px;
  margin-left: 12px;
}
.myadd-item .delete {
  width: 100px;
  height: 136px;
  line-height: 136px;
  background: #ff4949;
  font-size: 17px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  right: -100px;
}
.addAddres {
  height: 136px;
  line-height: 136px;
  text-align: center;
  margin: 0 30px;
  background: #fff;
  font-size: 22px;
  color: #000000;
  letter-spacing: 0.61px;
  border: 2px dashed #dcdcdc;
  box-sizing: border-box;
}
</style>
