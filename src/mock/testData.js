import Mock from 'mockjs';

Mock.mock('/api/test', 'get', {
  code: 0,
  msg: '',
  data: [
    {
      id: 1,
      name: 'asdasfas',
      sex: 0,
      age: 123,
    },
    {
      id: 2,
      name: 'nm,zcvjadhflka',
      sex: 1,
      age: 13,
    },
    {
      id: 3,
      name: 'afahsjfwoiqueqw',
      sex: 0,
      age: 23,
    },
  ],
});
