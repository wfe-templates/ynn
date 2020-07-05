/**
 * Created by busyhe on 2019-04-18 16:42.
 * Email: 525118368@qq.com
 */
module.exports = class extends require('ynn').Controller {
    async indexAction() {
        return this.render('../views/index.html');
    }
};
