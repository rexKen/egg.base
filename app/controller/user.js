'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    * index() {
        let _ctx = this.ctx
        const users = yield _ctx.service.user.getAll();

        this.ctx.helper.responseFormat.success(this.ctx, 'ok', users)
        // _ctx.body = users
    }

    * save() {
        let _ctx = this.ctx
        const users = yield _ctx.service.user.save(_ctx.request.body);

        this.ctx.helper.responseFormat.success(this.ctx, 'ok', users)
        // _ctx.body = users
    }
}

module.exports = UserController;
