exports.keys = "<此处改为你自己的 Cookie 安全字符串>";
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
  cookies:{
    httpOnly:true,
    sameSite:'strict'
  }
};