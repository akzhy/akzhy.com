module.exports = () => ({
    plugins: [
        require('tailwindcss'),
        require('postcss-nested')({ bubble: ['screen'] }),
        require('postcss-custom-properties'),
        require('autoprefixer'),
    ],
})
