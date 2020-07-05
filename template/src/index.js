/**
 * Created by busyhe on 2019-04-17 19:39.
 * Email: 525118368@qq.com
 */
const Ynn = require('ynn');
const os = require('os');
const path = require('path');
{{#vueServer}}
const historyApiFallback = require('koa2-connect-history-api-fallback');
{{/vueServer}}
{{#plugins.middleware-success}}
const success = require('@busyhe/ynn-middleware-success');
{{/plugins.middleware-success}}

const app = new Ynn({
    root: __dirname,
    static: {
        {{#vueServer}}
        '/static/(.*)': './views/',
        {{/vueServer}}
    },
    debugging: false,
    configDir:  process.env.NODE_ENV === 'test' ? path.resolve(__dirname, '../test/config'): path.join(os.homedir(), '.frontend-config/')
});
{{#vueServer}}
app.use(historyApiFallback.default({
    index: '/',
    whiteList: ['/api']
}));
{{#plugins.middleware-success}}
app.use(success());
{{/plugins.middleware-success}}
module.parent || app.listen(Ynn.cargs.port);
module.exports = app;
