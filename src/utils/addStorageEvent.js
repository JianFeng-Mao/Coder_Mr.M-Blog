import Vue from 'vue';

Vue.prototype.$addStorageEvent = function(key, data) {
  var newStorageEvent = document.createEvent('StorageEvent');
  const storage = {
    setItem: function(k, val) {
      localStorage.setItem(k, val);
      // 初始化创建的事件
      newStorageEvent.initStorageEvent(
        'setItem',
        false,
        false,
        k,
        null,
        val,
        null,
        null
      );
      // 派发对象
      window.dispatchEvent(newStorageEvent);
    },
  };
  return storage.setItem(key, data);
};
