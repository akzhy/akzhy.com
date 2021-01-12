module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4,
        'rule-empty-line-before': 'always',
        'at-rule-empty-line-before': 'never',
        'declaration-empty-line-before': 'never',
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        'declaration-colon-newline-after': null,
        'at-rule-empty-line-before': null
    },
}
