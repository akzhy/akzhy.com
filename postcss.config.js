module.exports = () => ({
    plugins: [
        require('tailwindcss'),
        require('postcss-nested')({ bubble: ['screen'] }),
    ],
})
