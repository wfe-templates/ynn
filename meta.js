const fuzzy = require('./fuzzy');

const ynnPlugins = [
    'plugin-exception',
    'middleware-success',
    'plugin-cors'
];

module.exports = {
    helpers: {
        if_or: function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'a ynn app',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        vueServer: {
            type: 'confirm',
            message: 'this is a vue App server?',
        },
        plugins: {
            type: 'checkbox-plus',
            pageSize: 10,
            highlight: true,
            searchable: true,
            message: 'select plugins',
            default: [
                'plugin-exception',
                'middleware-success',
                'plugin-cors'
            ],
            source: function (answersSoFar, input) {
                input = input || '';
                return new Promise(function (resolve) {
                    let fuzzyResult = fuzzy.filter(input, ynnPlugins);
                    let data = fuzzyResult.map(function (element) {
                        return element.original;
                    });
                    resolve(data);
                });
            }
        }
    },
    filters: {
        'src/views/**/*': 'vueServer',
        'src/controller/index.js': 'vueServer',
        'src/config/error.js': 'plugins["plugin-exception"]',
        'src/service/user.js': 'plugins["middleware-account"]'
    },
    completeMessage: 'To get started:\n\n  npm run debug'
};
