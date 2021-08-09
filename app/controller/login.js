const Controller = require('egg').Controller;

class LoginController extends Controller{
	async index() {
		const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    	};
		await this.ctx.render('login/loginPage.tpl',dataList);
	}
	async login(){
		const { ctx } = this;
		ctx.body = 3;
	}
}

module.exports = LoginController;