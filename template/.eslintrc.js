module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'globals': {
        'define': true,
        'describe': true,
        'xdescribe': true,
        'it': true,
        'xit': true,
        'beforeEach': true,
        'beforeAll': true,
        'afterEach': true,
        'afterAll': true,
        'expect': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 2017
    },
    'rules': {
        'no-console': 0,
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': ['error', 'single'],
        'semi': [0]
    }
};

