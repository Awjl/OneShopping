import Vue from 'vue'
import { configData } from "@/utils/config"

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
      return '0天'
    }
  } else {
    return value
  }
})

//  男女转换
Vue.filter('formatSex', function (value) {
  if (value == 0) {
    return "保密";
  } else if (value == 1) {
    return "男";
  } else {
    return "女";
  }
});

// 图片
function formatImg(val, width, height) {
  if (!val) {
    return null;
  }
  if (val.indexOf("http") != -1) {
    return val;
  }
  var url = configData.ALI_OSS_GATEWAY + "/" + val + "?x-oss-process=image/resize,";
  if (width) {
    url += "w_" + width + ",";
  }
  if (height) {
    url += "h_" + height + ",";
  }
  url = url.substring(0, url.length - 1);
  return url;
}
Vue.filter('formatImg80x80', function (value) {
  return formatImg(value, 80, 80);
});
Vue.filter('formatImg96x30', function (value) {
  return formatImg(value, 96, 30);
});
Vue.filter('formatImg116x116', function (value) {
  return formatImg(value, 116, 116);
});
Vue.filter('formatImg93x178', function (value) {
  return formatImg(value, 93, 178);
});
Vue.filter('formatImg279x297', function (value) {
  return formatImg(value, 279, 297);
});
Vue.filter('formatImg370x370', function (value) {
  return formatImg(value, 370, 370);
});
Vue.filter('formatImg54x54', function (value) {
  return formatImg(value, 54, 54);
});
Vue.filter('formatImg165x167', function (value) {
  return formatImg(value, 165, 167);
});
Vue.filter('formatImg750x255', function (value) {
  return formatImg(value, 750, 255);
});
Vue.filter('formatImg220x220', function (value) {
  return formatImg(value, 220, 220);
});
Vue.filter('formatImg136x136', function (value) {
  return formatImg(value, 136, 136);
});
Vue.filter('formatImg150x150', function (value) {
  return formatImg(value, 150, 150);
});

Vue.filter('formatImg156x156', function (value) {
  return formatImg(value, 156, 156);
});
Vue.filter('formatImg73x73', function (value) {
  return formatImg(value, 73, 73);
});
Vue.filter('formatImg180x180', function (value) {
  return formatImg(value, 180, 180);
});
Vue.filter('formatImg375x375', function (value) {
  return formatImg(value, 375, 375);
});
Vue.filter('formatImg368x368', function (value) {
  return formatImg(value, 368, 368);
});
Vue.filter('formatImg750x621', function (value) {
  return formatImg(value, 750, 621);
});
Vue.filter('formatImg1500x1500', function (value) {
  return formatImg(value, 1500, 1500);
});
Vue.filter('formatImg750x274', function (value) {
  return formatImg(value, 750, 274);
});
Vue.filter('formatImg93x178', function (value) {
  return formatImg(value, 93, 178);
});
Vue.filter('formatImg160x160', function (value) {
  return formatImg(value, 160, 160);
});
Vue.filter("formatImg139x120", function (value) {
  return formatImg(value, 139, 120);
});

Vue.filter("formatImg412x180", function (value) {
  return formatImg(value, 412, 180);
});

Vue.filter("formatImg345x130", function (value) {
  return formatImg(value, 345, 130);
});

Vue.filter("formatJpg", function (value) {
  if (value) {
    return configData.ALI_OSS_GATEWAY + "/" + value + "?x-oss-process=image/format,jpg";
  }
});

Vue.filter("formatEndTime", function(endTime) {
  console.log(endTime)
  var minus = endTime - new Date().getTime();
  console.log(minus);
  if (minus <= 0) {
      return "00：00：00";
  } else {
      minus = minus/1000;
      var day = parseInt(minus/(24*60*60));
      var hour = parseInt(minus % (24*60*60)/(60*60));
      var minute = parseInt(minus % (24 * 60)/ 60);
      var second = parseInt(minus % (60)/ 60);
      if (day > 0) {
          return day + "天" + " " + (hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute: "0" + minute) + ":" + (second > 9 ? second : "0" + second);
      } else {
          return (hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute: "0" + minute) + ":" + (second > 9 ? second : "0" + second);
      }
  }
})