/**
 * Created with vscode.
 * Author: Ken Lee
 * Email: ronleenice@gmail.com
 * Date: 2020/5/28
 * Time: 上午11:00
 * To test the MVC rules
 */

'use strict';

const Service = require('egg').Service;
const createRule = {
    name: 'string',
    sex: { type: 'enum', values: ['male', 'female'] },
    userpass: 'string'
}

class UserService extends Service {

    * save(query) {
        // console.log(query);
        // try {
        var _user = {
            username: query.name,
            sex: query.sex,
            userpass: query.userpass
        }

        if (query.id) {
            // 参数验证，1判断是否存在该id，2是否重名
            let userInfo = yield this.ctx.model.User.findOne({
                where: {
                    userid: query.id
                }
            })
            if (userInfo) {
                yield this.ctx.model.User.update(_user, {
                    where: {
                        userid: query.id
                    }
                })
            } else {
                throw this.ctx.getError({
                    msg: `不存在id为${query.id}的用户信息`
                })
            }
        } else {
            this.ctx.validate(createRule, query);
            console.log(_user)
            var newItem = yield this.ctx.model.User.create(_user)
            // query.id = newItem.id
        }

        // return {id : query.id}
        // } catch (error) {
        //     this.ctx.app.emit('error', error, this.ctx);
        // }
    }

    * getAll() {
        let users = yield this.ctx.model.User.findAll()
        return users
    }
}

module.exports = UserService;
