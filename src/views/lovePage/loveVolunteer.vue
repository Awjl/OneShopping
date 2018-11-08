<template>
  <div class="loveVolunteer">
    <div class="loveVolunteerTitle">
      一只商店志愿者招募啦～
    </div>
    <div class="loveVolunteerConter">
      在我们生活的城市了<br>
      有这样一群小生命<br>
      它们小心翼翼地活着<br>
      因为伤害，它们满怀戒备<br>
      因为无助，它们满身伤病<br>
      因为无家可归，它们蜷缩在各个角落
    </div>
    <div class="loveVolunteerConter">
      一只商店致力于流浪动物的公益救助<br>
      如果你相信公益的力量<br>
      只要一点时间<br>
      只要一份心意<br>
      众多喜爱动物的小伙伴<br>
      还差一个有爱的你<br>
    </div>
    <p class="eml">
      志愿者招募邮箱：<span>thepet@store.cn</span>
    </p>
    <div class="loveVolunteerTitle">
      期待你的加入！
    </div>
  </div>
</template>

<script>
export default {
  name: "loveVolunteer"
};
</script>

<style lang="scss">
.loveVolunteer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 120px;
  box-sizing: border-box;
  .loveVolunteerTitle {
    font-size: 36px;
    color: #60d4ba;
    letter-spacing: 2px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .loveVolunteerConter {
    width: 100%;
    font-size: 24px;
    color: #333333;
    letter-spacing: 1px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .eml {
    font-size: 24px;
    color: #333333;
    letter-spacing: 1.33px;
    margin: 30px;
    span {
      color: #60d4ba;
    }
  }
}
</style>
