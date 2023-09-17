const RULES = {
    off: 'off',
    warn: 'warn',
    error: 'error',
}

module.exports = {

    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],

    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                './**/*.{ts,tsx}',


            ],
            "parserOptions": {
                "sourceType": "script",

            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["tsconfig.json"],

    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/prefer-optional-chain": RULES.error,
        "react/react-in-jsx-scope": RULES.off,
        "@typescript-eslint/explicit-function-return-type": RULES.off,
        "@typescript-eslint/no-misused-promises": [RULES.error, { "checksVoidReturn": false }],
        "@typescript-eslint/restrict-template-expressions": RULES.off,
        "@typescript-eslint/promise-function-async": RULES.off,
        "@typescript-eslint/prefer-optional-chain": RULES.off,
    },
    "ignorePatterns": [".eslintrc.js", "tsconfig.json", 'next.config.js']
}
