'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const url = ctx.request.href;
    // const respJson = {};
    // respJson.url = url;
    // ctx.body = respJson;
    ctx.cookies.set('index','hehe');
    
    ctx.cookies.remove('index.sig');
    const respObj = {};
    respObj.name = "world";
    respObj.url = ctx.request.href;
    await this.ctx.render('index/index.tpl',respObj);
  }
}

module.exports = HomeController;
