const _ = require("lodash");
const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        themes: {
            light: {
                primary: '#94c759', //
                secondary: '#3ca8d8',
                bg: {
                    primary: '#fff',
                    secondary: '#f7f7f7',
                    accent: '#f1f1f1',
                },
                fg: {
                    primary: '#343959',
                    light: '#444',
                    error: '#f44335',
                    success: '#0c8a11',
                    link: '#1670b7',
                },
            }
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#fff',
                black: '#000',
                primary: '#9c27b0',
                secondary: '#f44336',
                bg: {
                    primary: '#171414',
                    secondary: '#1b1b1b',
                    accent: '#2f283d',
                },
                fg: {
                    primary: '#fff',
                    light: '#eee',
                    error: '#ff8080',
                    success: '#8BF189',
                    link: '#5bb3ff',
                },
            },
            animation: {
                spin: 'spin 3s linear infinite',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [plugin(function ({ addUtilities, addBase, variants, theme, e }) {

        const themes = theme("themes");

        const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
            .default;

        let utilities = {};

        const properties = [
            {
                property: "background-color",
                name: "bg",
                variants: ['hover', 'focus']
            }, {
                property: "border-color",
                name: "border",
                variants: ['hover', 'focus']
            }, {
                property: "color",
                name: "text",
                variants: ['hover', 'focus']
            }
        ]

        Object.keys(themes).forEach(theme => {
            let parent = e(`theme-${theme}`);

            properties.forEach(prop => {
                let res = makeColorVariant(prop, parent, theme);
                utilities = { ...utilities, ...res };
            })
        });


        addBase(utilities)

        function makeColorVariant(property, parent, th) {
            const colors = flattenColorPalette(themes[th]);

            const createPair = (p, m, v, par) => {
                let selector = e(`${p.name}-${m}`);
                selector = `.${par} .${selector}`;
                let value = {};
                value[p.property] = v;
                return [selector, value]
            }

            const createVariant = (p, m, v, par) => {
                let selector = e(`${p.name}-${m}`);
                return p.variants.map(variant => {
                    let value = {};
                    value[p.property] = v;
                    return [`.${par} .${variant}\\:${selector}:${variant}`, value]
                })
            }


            return _.fromPairs(
                [
                    ..._.map(_.omit(colors, "default"), (value, modifier) => createPair(property, modifier, value, parent)),
                    ..._.flatten(_.map(_.omit(colors, "default"), (value, modifier) => createVariant(property, modifier, value, parent)))
                ]
            );
        }
    })],
}
