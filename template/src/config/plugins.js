module.exports = app => {
    return {
        {{#plugins.plugin-exception}}
        Exception: '@busyhe/ynn-plugin-exception',
        {{/plugins.plugin-exception}}
        {{#plugins.plugin-cors}}
        cors: {
            path: '@busyhe/ynn-plugin-cors',
                options: {
                whitelist: [{
                    origin: /.*/,
                    headers: ['authorization', 'content-type']
                }]
            }
        },
        {{/plugins.plugin-cors}}
    }
}
