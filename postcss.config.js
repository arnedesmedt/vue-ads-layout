module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: './tailwind.config.js',
        '@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.vue'],
            whitelistPatterns: [
                /^body$/,
                /^html$/,
                /^w-\d{1,3}$/,
                /^h-\d{1,3}$/,
                /^z-\d{1,3}$/,
                /^pt-\d{1,3}$/,
                /^pb-\d{1,3}$/,
            ],
        },
        'postcss-import': {},
        'postcss-url': {},
    },
};
