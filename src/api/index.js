import request from './request';
export const getTestData = async function() {
  return await request({
    url: '/api/test',
    method: 'get',
  });
};

//获取文章分类
export const getArticleTypes = async function() {
  return await request({
    url: '/api/articleTypes',
    method: 'get',
  });
};

//获取所有文章
export const getArticle = async function(params) {
  return await request({
    url: '/api/article',
    method: 'get',
    params,
  });
};

// 获取文章详情
export const getArticleDetail = async function() {
  return await request({
    url: '/api/article/detail/:id',
    method: 'get',
  });
};

/**
 * 提交评论
 * @param {Object} data {nickname:String, content:String,ArticleId: Number}
 * @returns
 */
export const postComment = async function(data) {
  return await request({
    url: '/api/comment',
    method: 'post',
    data,
  });
};

/**
 * 分页获取文章评论
 * @param {Object} params {blogId, page, limit}
 * @returns
 */
export const getComment = async function(params) {
  return await request({
    url: '/api/comment',
    method: 'get',
    params,
  });
};

/**
 * 提交留言
 * @param {Object} data {nickname:String,concat content:String}
 * @returns
 */
export const postMessage = async function(data) {
  return await request({
    url: '/api/message',
    method: 'post',
    data,
  });
};

/**
 * 分页获取留言
 * @param {Object} params {page, limit}
 * @returns
 */
export const getMessage = async function(params) {
  return await request({
    url: '/api/message',
    method: 'get',
    params,
  });
};
