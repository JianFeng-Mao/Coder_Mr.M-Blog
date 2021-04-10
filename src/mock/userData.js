import Mock from 'mockjs';

Mock.mock(/^\/api\/user\?userId=[\d]+/, 'get', {
  code: 0,
  msg: '',
  data: {
    nickname: '@cname',
    'avatar|1': [
      'https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg',
      'https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg',
      'https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg',
      'https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg',
    ],
  },
});
