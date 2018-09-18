module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
    ],
    rules: {
        indent: [
            'error',
            4,
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-extra-semi': 'error',
        'quote-props': [
            'error',
            'as-needed',
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
