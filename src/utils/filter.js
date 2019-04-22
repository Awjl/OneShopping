import Vue from 'vue'

// 精准到两位数
Vue.filter('formatFee', function (value) {
  if (value) {
    return (value / 100).toFixed(2);
  } else {
    return value;
  }
});

// 时间转换年月日时分秒
Vue.filter('getData', function (value) {
  if (value) {
    function checkTime(m) { return m < 10 ? '0' + m : m };
    //shijianchuo是整数，否则要parseInt转换  
    let time = new Date(value);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y + '-' + checkTime(m) + '-' + checkTime(d) + ' ' + checkTime(h) + '-' + checkTime(mm) + '-' + checkTime(s);
  } else {
    return value
  }
})

// 倒计时时间转换
Vue.filter('downData', function (value) {
  if (value) {
    if (value > 0) {
      function checkTime(m) { return m < 10 ? '0' + m : m };
      let days = parseInt(value / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
      let hours = parseInt(value / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
      let minutes = parseInt(value / 1000 / 60 % 60, 10);//计算剩余的分钟 
      let seconds = parseInt(value / 1000 % 60, 10);//计算剩余的秒数 
      days = checkTime(days);
      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      return days + "天" + hours + ":" + minutes + ":" + seconds + "秒"
    }
    else {
      return  '0天'
    }
  } else {
    return value
  }
})

//  男女转换
Vue.filter('formatSex', function (value) {
  if (value == 0) {
      return "保密";
  }else if(value == 1){
      return "男";
}else {
      return "女";
  }
});