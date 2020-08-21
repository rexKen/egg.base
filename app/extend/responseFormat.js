'use strict';

module.exports = {
    /**
     * 调用正常情况的返回数据封装
     * @param {Object} ctx - context
     * @param {*} msg  - message
     * @param {*} data - 数据
     */
    success(ctx, msg, data) {
        ctx.body = {
            code: 0,
            msg,
            data,
        };
        ctx.status = 200;
    },

    /**
     * 处理失败，处理传入的失败原因
     * @param {*} ctx - context
     * @param {Object} res - 返回的状态数据
     */

    fail(ctx, res) {
        ctx.body = {
            code: res.code,
            msg: res.msg,
            data: res.data,
        };
        ctx.status = 200;
    },
};
