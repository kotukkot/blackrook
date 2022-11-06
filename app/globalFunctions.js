import Vue from 'nativescript-vue';

Vue.mixin({
  computed: {},
});

Vue.prototype.$fixHtml = (args) => {
  if (args.object && args.object.ios) {
    setTimeout(() => {
      args.object.requestLayout();
    }, 0);
  }
};

Vue.prototype.$fixListView = (args) => {
  if (args.object && args.object.ios) {
    
    setTimeout(() => {
      args.object.refresh();
    }, 0);
  }
};
