module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: './tailwind.config.js',
        '@fullhuman/postcss-purgecss': {
            content: ['./src/components/*.vue'],
            whitelistPatterns: [
                /^body$/,
                /^html$/,
                /^w-\d{1,3}$/,
                /^h-\d{1,3}$/,
                /^z-\d{1,3}$/,
                /^pt-\d{1,3}$/,
                /^pb-\d{1,3}$/,
                /^inset-l-\d{1,3}$/,
                /^inset-r-\d{1,3}$/,
                /^-ml-\d{1,3}$/,
                /^-mr-\d{1,3}$/,
            ],
        },
        'postcss-import': {},
        'postcss-url': {},
    },
};
