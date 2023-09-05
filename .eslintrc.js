module.exports = {
    extends: [
        "next/core-web-vitals",
        // "eslint:recommended",
    ],

    plugins: ['@typescript-eslint', 'import'],

    rules: {
        // "import/no-unresolved": [2, {commonjs: true, amd: true}],
        // "import/no-relative-parent-imports": 2,


        //     'no-restricted-imports': [
        //         'error',
        //         {
        //             patterns: [
        //                 {
        //                     group: ['.*'],
        //                     message: 'Usage of relative imports is not allowed.',
        //                 },
        //             ],
        //         },
        //     ]
    },

    settings: {
        'import/resolver': {
            typescript: true,
            node: {
                alias: {
                    "@": "./src"
                }
            }
        }

    }
}
