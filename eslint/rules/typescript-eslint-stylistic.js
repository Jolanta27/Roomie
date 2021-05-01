// Note: based on ruleset available in eslint 7.7.x
// Note: based on ruleset available in typescript-eslint 3.9.x

/**
 * @param {import("../create").CreateRulesListParams} params
 */
 const createRulesList = (params) => {
    /**
     * Note: this creator is an equivalent of ESLint's Stylistic issues.
     */

    return {
        // TypeScript - ESLint equivalents (no type checking)
        // --------------------------------------------------

        // Available, but not enabled:
        //
        // @typescript-eslint/default-param-last (common pattern in Redux)

        // Enabled by plugin:@typescript-eslint/recommended:
        // (equivalent eslint:recommended rules adjusted by plugin:@typescript-eslint/eslint-recommended)
        //
        // @typescript-eslint/no-array-constructor [no-array-constructor]
        // @typescript-eslint/no-extra-semi [no-extra-semi]

        // First, explicitly disable ESLint equivalents
        'brace-style': [ 'off' ],
        'comma-dangle': [ 'off' ],
        'camelcase': [
            // Although this does not exist in @typescript-eslint anymore,
            // we are using @typescript-eslint/naming-convention.
            // Disable it to prevent duplication and/or clashes.
            'off',
        ],
        'comma-spacing': [ 'off' ],
        'func-call-spacing': [ 'off' ],
        'indent': [ 'off' ],
        'lines-between-class-members': [ 'off' ],
        'quotes': [ 'off' ],
        'semi': [ 'off' ],
        'space-before-function-paren': [ 'off' ],

        // Second, re-enable TypeScript-enhanced ESLint rules
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true,
            },
        ],
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'always-multiline',
                'enums': 'always-multiline',
                'generics': 'always-multiline',
                'tuples': 'always-multiline',
            },
        ],
        '@typescript-eslint/comma-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        '@typescript-eslint/func-call-spacing': [
            'error',
            'never',
        ],
        '@typescript-eslint/indent': [
            // TODO: Problems with this rule due to implementation complexity
            // See https://github.com/typescript-eslint/typescript-eslint/issues/1824
            // Consider using prettier instead of this and other stylistic rules.
            'error',
            params.indentSpaces,
        ],
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            // Additional properties set to defaults:
            // exceptAfterSingleLine: false (eslint)
            // exceptAfterOverload: true (ts plugin)
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        '@typescript-eslint/semi': [
            'error',
            'always',
        ],
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],


        // TypeScript - TS specific (no type checking)
        // --------------------------------------------------

        // Available, but not enabled:
        //
        // @typescript-eslint/method-signature-style

        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                'before': false,
                'after': true,
                'overrides': {
                    'arrow': {
                        'before': true,
                        'after': true,
                    },
                },
            },
        ],
    };
};

module.exports = {
    createRulesList,
};
