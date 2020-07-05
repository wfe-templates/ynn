/**
 * Created by busyhe on 2019-04-17 20:09.
 * Email: 525118368@qq.com
 */
module.exports = class extends require('ynn').Controller {
    async indexAction() {
        const ctx = this.ctx;
        {{#plugins.middleware-success}}
        return ctx.success();
        {{/plugins.middleware-success}}
        {{#unless plugins.middleware-success}}
        return ctx.body = {
            status: 0,
            message: 'success'
        };
        {{/unless}}
    }
};
