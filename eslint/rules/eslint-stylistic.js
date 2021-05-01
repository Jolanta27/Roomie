// Note: based on ruleset available in ESLint 7.7.x

/**
 * @param {import("../create").CreateRulesListParams} params
 */
 const createRulesList = (params) => {
    const CONST_MAX_PARAMS_LIMIT = 3;

    return {
        // ESLint - Stylistic issues
        // -------------------------

        // Available, but not enabled:
        //
        // capitalized-comments
        // consistent-this
        // func-name-matching
        // func-style
        // id-denylist (no disallowed names yet)
        // id-length (hard to determine)
        // id-match
        // lines-around-comment
        // max-depth (hard to determine)
        // max-lines (hard to determine)
        // max-lines-per-function (hard to determine)
        // max-nested-callbacks (hard to determine)
        // max-statements
        // max-statements-per-line
        // multiline-comment-style
        // no-continue
        // no-inline-comments
        // no-negated-condition (short-circuiting is a neat thing)
        // no-ternary
        // nonblock-statement-body-position (redundant because 'curly' braces are required)
        // sort-keys (no real value in sorting keys)
        // sort-vars (no real value in sorting variables)

        // Enabled by eslint:recommended:
        //
        // no-mixed-spaces-and-tabs

        'array-bracket-newline': [
            // For now, 'consistent' seems to be a better option than 'multiline'
            // because the latter is too strict for 1-element arrays.
            'error',
            'consistent',

            // TODO: this rule does not support 'consistent: true' in the object-config mode.
            // Either fork this rule and provide that functionality on our own,
            // or consider using prettier instead.
            // See: https://github.com/eslint/eslint/issues/13582
            // {
            //     'multiline': true,
            //     'minItems': null,
            // }
        ],
        'array-bracket-spacing': [
            'error',
            'always',
        ],
        'array-element-newline': [
            'error',
            'consistent',
        ],
        'object-curly-newline': [
            'error',
            {
                'multiline': true,
                'consistent': true,
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'object-property-newline': [
            'error',
            {
                'allowAllPropertiesOnSameLine': true,
            },
        ],
        'block-spacing': [
            'error',
            'always',
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true,
            },
        ],
        'camelcase': [
            'error',
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'always-multiline',
            },
            // [@typescript-eslint equivalent: @typescript-eslint/comma-dangle]
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'comma-style': [
            'error',
            'last',
        ],
        'computed-property-spacing': [
            'error',
            'never',
            {
                // default behavior, explicitly enabled
                'enforceForClassMembers': true,
            },
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'func-call-spacing': [
            'error',
            'never',
        ],
        'func-names': [
            // Warning only
            'warn',
            'as-needed',
        ],
        'function-call-argument-newline': [
            'error',
            'consistent',
        ],
        'function-paren-newline': [
            'error',
            'multiline-arguments',
        ],
        'implicit-arrow-linebreak': [
            'error',
            'beside',
        ],
        'indent': [
            'error',
            params.indentSpaces,
        ],
        'jsx-quotes': [
            'error',
            'prefer-double',
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true,
                'mode': 'strict',
            },
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        'line-comment-position': [
            'error',
            {
                'position': 'above',
                'ignorePattern': '',
                'applyDefaultIgnorePatterns': false,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'lines-between-class-members': [
            'error',
            'always',
        ],
        'max-len': [
            'error',
            {
                'code': params.maxLineWidth,
                'tabWidth': params.indentSpaces,
                'ignorePattern': '',
                'ignoreComments': false,
                'ignoreTrailingComments': false,
                'ignoreUrls': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true,
            },
        ],
        'max-params': [
            // Warning only
            'warn',
            CONST_MAX_PARAMS_LIMIT,
        ],
        'multiline-ternary': [
            'error',
            'always-multiline',
        ],
        'new-cap': [
            'error',
            {
                'properties': true,
                'newIsCap': true,
                'newIsCapExceptions': [],
                'capIsNew': true,
                'capIsNewExceptions': [],
            },
        ],
        'new-parens': [
            'error',
            'always',
        ],
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 2,
            },
        ],
        'no-bitwise': [
            'error',
        ],
        'no-lonely-if': [
            'error',
        ],
        'no-mixed-operators': [
            'error',
            // Uses the default grouping and allows same precedence to be mixed
        ],
        'no-multi-assign': [
            'error',
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 2,
                'maxBOF': 0,
                'maxEOF': 1,
            },
        ],
        'no-nested-ternary': [
            'error',
        ],
        'no-new-object': [
            'error',
        ],
        'no-plusplus': [
            'error',
            {
                'allowForLoopAfterthoughts': true,
            },
        ],
        'no-tabs': [
            'error',
        ],
        'no-trailing-spaces': [
            'error',
        ],
        'no-underscore-dangle': [
            'error',
            {
                'allow': [],
                'allowAfterThis': false,
                'allowAfterSuper': false,
                'allowAfterThisConstructor': false,
                'enforceInMethodNames': true,
                'allowFunctionParams': true,
            },
        ],
        'no-unneeded-ternary': [
            'error',
            {
                'defaultAssignment': false,
            },
        ],
        'no-whitespace-before-property': [
            'error',
        ],
        'one-var': [
            'error',
            'never',
        ],
        'one-var-declaration-per-line': [
            'error',
            'always',
        ],
        'operator-assignment': [
            'error',
            'always',
        ],
        'operator-linebreak': [
            'error',
            'after',
            {
                'overrides': {
                    '=': 'none',
                },
            },
        ],
        'padded-blocks': [
            'error',
            'never',
        ],
        'padding-line-between-statements': [
            'error',
            {
                'prev': '*',
                'next': [ 'return', 'throw', 'break', 'continue' ],
                'blankLine': 'always',
            },
            {
                'prev': [ 'const', 'let', 'var' ],
                'next': '*',
                'blankLine': 'always',
            },
            {
                'prev': '*',
                'next': [ 'const', 'let', 'var' ],
                'blankLine': 'always',
            },
            {
                'prev': [ 'const', 'let', 'var' ],
                'next': [ 'const', 'let', 'var' ],
                'blankLine': 'any',
            },
            {
                'prev': '*',
                'next': 'directive',
                'blankLine': 'always',
            },
            {
                'prev': 'directive',
                'next': 'directive',
                'blankLine': 'any',
            },
            {
                'prev': '*',
                'next': 'export',
                'blankLine': 'always',
            },
            {
                'prev': 'export',
                'next': 'export',
                'blankLine': 'any',
            },
            {
                'prev': '*',
                'next': 'import',
                'blankLine': 'always',
            },
            {
                'prev': 'import',
                'next': 'import',
                'blankLine': 'any',
            },
        ],
        'prefer-exponentiation-operator': [
            'error',
        ],
        'prefer-object-spread': [
            'error',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'quote-props': [
            'error',
            'as-needed',
            {
                'keywords': false,
                'unnecessary': false,
                'numbers': false,
            },
        ],
        'semi': [
            'error',
            'always',
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'semi-style': [
            'error',
            'last',
        ],
        'space-before-blocks': [
            'error',
            'always',
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-infix-ops': [
            'error',
        ],
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false,
            },
        ],
        'spaced-comment': [
            'error',
            'always',
        ],
        'switch-colon-spacing': [
            'error',
            {
                'after': true,
                'before': false,
            },
        ],
        'template-tag-spacing': [
            'error',
            'never',
        ],
        'unicode-bom': [
            'error',
            'never',
        ],
        'wrap-regex': [
            'error',
        ],
    };
};

module.exports = {
    createRulesList,
};
