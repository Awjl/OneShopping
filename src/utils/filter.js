import Vue from 'vue'

Vue.filter('formatFee', function (value) {
  if (value) {
    return (value / 100).toFixed(2);
  } else {
    return 0;
  }
});