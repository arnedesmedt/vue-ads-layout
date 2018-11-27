module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: './tailwind.config.js',
        '@fullhuman/postcss-purgecss': {
            content: ['./src/components/*.vue'],
            whitelistPatterns: [
                /^body$/,
                /^html$/,
                /^vue-ads-w-\d{1,3}$/,
                /^vue-ads-h-\d{1,3}$/,
                /^vue-ads-z-\d{1,3}$/,
                /^vue-ads-pt-\d{1,3}$/,
                /^vue-ads-pb-\d{1,3}$/,
                /^vue-ads-inset-l-\d{1,3}$/,
                /^vue-ads-inset-r-\d{1,3}$/,
                /^vue-ads--ml-\d{1,3}$/,
                /^vue-ads--mr-\d{1,3}$/,
            ],
        },
        'postcss-import': {},
        'postcss-url': {},
    },
};
