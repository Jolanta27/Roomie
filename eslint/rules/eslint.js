// Note: based on ruleset available in ESLint 7.7.x

/**
 * @param {import("../create").CreateRulesListParams} params
 */
 const createRulesList = (params) => {
    /**
     * Important notes
     * ---------------
     *
     * - Stylistic rules reside in a separate creator function
     *
     */

    return {
        // ESLint - Possible Errors
        // ------------------------

        // Enabled by eslint:recommended:
        //
        // for-direction
        // getter-return
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // no-async-promise-executor
        // no-compare-neg-zero
        // no-constant-condition
        // no-control-regex
        // no-debugger
        // no-dupe-args
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // no-dupe-else-if
        // no-dupe-keys
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // no-duplicate-case
        // no-empty
        // no-empty-character-class
        // no-ex-assign
        // no-extra-boolean-cast
        //      (TODO: option "enforceForLogicalOperands" is set to "false" in the recommendation,
        //      but we should consider enabling it)
        // no-func-assign
        // no-import-assign
        // no-inner-declarations
        // no-invalid-regexp
        // no-irregular-whitespace
        // no-misleading-character-class
        // no-obj-calls
        // no-prototype-builtins
        // no-regex-spaces
        // no-setter-return
        // no-sparse-arrays
        // no-unexpected-multiline
        // no-unreachable
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // no-unsafe-finally
        // no-unsafe-negation
        // valid-typeof
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)

        'no-await-in-loop': [
            'error',
        ],
        'no-cond-assign': [
            // Overrides eslint:recommended
            'error',
            'always',
        ],
        'no-console': [
            // Warning only
            'warn',
        ],
        'no-extra-parens': [
            // Disabled, using additional parens is highly valuable in terms of
            // code readability
            'off',
        ],
        'no-extra-semi': [
            'error',
        ],
        'no-loss-of-precision': [
            'error',
        ],
        'no-promise-executor-return': [
            'error',
        ],
        'no-template-curly-in-string': [
            'error',
        ],
        'no-unreachable-loop': [
            'error',
            {
                'ignore': [],
            },
        ],
        'no-unsafe-optional-chaining': [
            'error',
        ],
        'no-useless-backreference': [
            'error',
        ],
        'require-atomic-updates': [
            'error',
        ],
        'use-isnan': [
            // Overrides eslint:recommended
            'error',
            {
                'enforceForSwitchCase': true,
                'enforceForIndexOf': true,
            },
        ],


        // ESLint - Best Practices
        // -----------------------

        // Available, but not enabled:
        //
        // accessor-pairs
        // block-scoped-var (var is forbidden)
        // class-methods-use-this
        // complexity
        // consistent-return (not that important, especially when using TypeScript)
        // default-case (not that important, especially when using TypeScript & exhaustive checks)
        // grouped-accessor-pairs
        // max-classes-per-file
        // no-eq-null ('==' comparison forbidden by 'eqeqeq')
        // no-extra-label (labels forbidden by 'no-labels')
        // no-restricted-properties (no disallowed prop / object names yet)
        // require-await
        // require-unicode-regexp
        // vars-on-top

        // Enabled by eslint:recommended:
        //
        // no-case-declarations
        // no-empty-pattern
        // no-global-assign
        // no-octal
        // no-redeclare
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that. Additionally, TypeScript's plugin has
        //      an extension rule for that)
        // no-self-assign
        // no-unused-labels (although redundant because of 'no-labels')
        // no-useless-catch
        // no-useless-escape
        // no-with

        'array-callback-return': [
            'error',
            {
                'allowImplicit': true,
            },
        ],
        'curly': [
            'error',
            'all',
        ],
        'default-case-last': [
            'error',
        ],
        'default-param-last': [
            // Disabled, (common pattern in Redux)
            'off',
        ],
        'dot-location': [
            'error',
            'property',
        ],
        'dot-notation': [
            'error',
        ],
        'eqeqeq': [
            'error',
            'always',
        ],
        'guard-for-in': [
            // Enabled, although .forEach or for-of loops should be used instead
            'error',
        ],
        'no-alert': [
            'error',
        ],
        'no-caller': [
            'error',
        ],
        'no-constructor-return': [
            'error',
        ],
        'no-div-regex': [
            'error',
        ],
        'no-else-return': [
            'error',
            {
                'allowElseIf': false,
            },
        ],
        'no-empty-function': [ 'warn' ],
        'no-eval': [
            'error',
        ],
        'no-extend-native': [
            'error',
        ],
        'no-extra-bind': [
            'error',
        ],
        'no-fallthrough': [
            // Overrides eslint:recommended
            'error',
            {
                'commentPattern': 'break[\\s\\w]*omitted',
            },
        ],
        'no-floating-decimal': [
            'error',
        ],
        'no-implicit-coercion': [
            'error',
        ],
        'no-implicit-globals': [
            'error',
        ],
        'no-implied-eval': [
            'error',
        ],
        'no-invalid-this': [
            'error',
            {
                'capIsConstructor': false,
            },
        ],
        'no-iterator': [
            // Disallow Iterator (__iterator__, non-standard SpiderMonkey property)
            'error',
        ],
        'no-labels': [
            'error',
        ],
        'no-lone-blocks': [
            'error',
        ],
        'no-loop-func': [
            'error',
            // [@typescript-eslint equivalent: @typescript-eslint/no-loop-func]
        ],
        'no-magic-numbers': [
            // Warning only
            'warn',
            {
                'ignore': [ -1, 0, 1 ],
                'ignoreArrayIndexes': false,
                'ignoreDefaultValues': false,
                'enforceConst': true,
                'detectObjects': false,
            },
        ],
        'no-multi-spaces': [
            'error',
        ],
        'no-multi-str': [
            'error',
        ],
        'no-new': [
            // Disallow new For Side Effects
            'error',
        ],
        'no-new-func': [
            // Disallow Function Constructor
            'error',
        ],
        'no-new-wrappers': [
            // Disallow Primitive Wrapper Instances
            'error',
        ],
        'no-nonoctal-decimal-escape': [
            // Disallow legacy \8 & \9 escapes, which are useless
            'error',
        ],
        'no-octal-escape': [
            'error',
        ],
        'no-param-reassign': [
            'error',
            {
                'props': true,
            },
        ],
        'no-proto': [
            'error',
        ],
        'no-return-assign': [
            'error',
            'always',
        ],
        'no-return-await': [
            'error',
        ],
        'no-script-url': [
            'error',
        ],
        'no-self-compare': [
            'error',
        ],
        'no-sequences': [
            'error',
        ],
        'no-throw-literal': [
            'error',
        ],
        'no-unmodified-loop-condition': [
            'error',
        ],
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': false,
                'allowTernary': false,
                'allowTaggedTemplates': false,
            },
        ],
        'no-useless-call': [
            'error',
        ],
        'no-useless-concat': [
            'error',
        ],
        'no-useless-return': [
            'error',
        ],
        'no-void': [
            'error',
            {
                // Allows to mark certain statements as "consumed", eg. promises.
                // See: https://github.com/eslint/eslint/pull/12613
                // TODO: related to @typescript-eslint/no-floating-promises
                'allowAsStatement': true,
            },
        ],
        'no-warning-comments': [
            // Warning only
            'warn',
            {
                'terms': [ 'todo', 'fix', 'xxx' ],
                'location': 'start',
            },
        ],
        'prefer-named-capture-group': [
            // Disabled because named capture groups are not widely supported by all browsers
            'off',
        ],
        'prefer-promise-reject-errors': [
            'error',
            {
                'allowEmptyReject': true,
            },
        ],
        'prefer-regex-literals': [
            'error',
            {
                'disallowRedundantWrapping': true,
            },
        ],
        'radix': [
            'error',
            'always',
        ],
        'require-await': [ 'off' ],
        'wrap-iife': [
            'error',
            'inside',
            {
                'functionPrototypeMethods': true,
            },
        ],
        'yoda': [
            'error',
            'never',
        ],


        // ESLint - Strict mode
        // --------------------

        'strict': [
            // Not an issue with TypeScript
            'error',
            'never',
        ],


        // ESLint - Variables
        // ------------------

        // Available, but not enabled:
        //
        // init-declarations
        // no-label-var (labels forbidden by 'no-labels')
        // no-undefined

        // Enabled by eslint:recommended:
        //
        // no-delete-var
        // no-shadow-restricted-names
        // no-undef
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that when 'strictNullChecks' is enabled)

        'no-restricted-globals': [
            // TODO: consider including 'confusing-browser-globals' package,
            // similar to airbnb's eslint rules
            'error',
            {
                'name': 'isFinite',
                'message': 'Use Number.isFinite() to prevent type coersion.',
            },
            {
                'name': 'isNaN',
                'message': 'Use Number.isNaN() to prevent type coersion.',
            },
        ],
        'no-shadow': [
            'error',
            // [@typescript-eslint equivalent: @typescript-eslint/no-shadow]
        ],
        'no-undef-init': [
            'error',
        ],
        'no-unused-vars': [
            // Overrides eslint/recommended
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'argsIgnorePattern': '^_',
                'ignoreRestSiblings': true,
                'caughtErrors': 'all',
                'caughtErrorsIgnorePattern': '^_',
            },
        ],
        'no-use-before-define': [
            'error',
            // [@typescript-eslint equivalent: @typescript-eslint/no-use-before-define]
        ],


        // ESLint - Stylistic issues
        // -------------------------
        // Contains rules that are either crucial or simply not stylistic,
        // despite their official grouping.

        // Enabled by eslint:recommended:
        //
        // no-mixed-spaces-and-tabs

        'no-restricted-syntax': [
            'error',
            {
                'selector': 'ForInStatement',
                'message': 'Loops should be avoided in favor of array iterations. Besides, for..in loops may iterate over inherited properties from the prototype chain.',
            },
            {
                'selector': 'ForOfStatement',
                'message': 'Loops should be avoided in favor of array iterations.',
            },
            {
                'selector': 'UnaryExpression[operator=delete]',
                'message': 'Use destructuring and rest syntax instead of "delete" keyword.',
            },
            {
                'selector': 'BinaryExpression[operator=in]',
                'message': 'Do not use "in" binary operator because of its confusing nature. You most likely want to use ".includes()" on an array.',
            },
            // WithStatement disabled by 'no-with'
            // LabeledStatement disabled by 'no-labels'
        ],


        // ESLint - ECMAScript 6 / ES2015
        // ------------------------------

        // Available, but not enabled:
        //
        // sort-imports
        //      (no real value in sorting imports; sorting groups of imports,
        //      eg. external lib vs internal components, is another matter)

        // Enabled by eslint:recommended:
        //
        // constructor-super
        // no-class-assign
        // no-const-assign
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // no-new-symbol
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // no-this-before-super
        //      (TypeScript: disabled by plugin:@typescript-eslint/eslint-recommended,
        //      TypeScript takes care of that)
        // require-yield

        'arrow-body-style': [
            // Disabled, because this rule is simply too strict
            // and does not always bring value to the codebase
            'off',
            'as-needed',
            {
                'requireReturnForObjectLiteral': true,
            },
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        'generator-star-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'no-confusing-arrow': [
            'error',
            {
                'allowParens': true,
            },
        ],
        'no-dupe-class-members': [
            'error',
        ],
        'no-duplicate-imports': [
            'error',
            {
                'includeExports': true,
            },
        ],
        'no-restricted-exports': [
            'error',
            {
                'restrictedNamedExports': [],
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                'patterns': [
                    ...[
                        (
                            !((params.restrictedImports || {}).isPrivateModulesRestrictionEnabled) ?
                                undefined :
                                // Note: Experimental
                                // Files suffixed with ".private" should not be imported using absolute imports.
                                // They should only be used as relative imports,
                                // and only by their respective modules or tests.
                                '~/**/*.private'
                        ),
                    ].filter((value) => Boolean(value)),
                ],
            },
        ],
        'no-useless-computed-key': [
            'error',
        ],
        'no-useless-constructor': [
            'error',
        ],
        'no-useless-rename': [
            'error',
        ],
        'no-var': [
            'error',
        ],
        'object-shorthand': [
            'error',
            'always',
        ],
        'prefer-arrow-callback': [
            'error',
            {
                'allowNamedFunctions': false,
                'allowUnboundThis': true,
            },
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': true,
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                'VariableDeclarator': {
                    'array': false,
                    'object': true,
                },
                'AssignmentExpression': {
                    'array': false,
                    'object': false,
                },
            },
            {
                'enforceForRenamedProperties': false,
            },
        ],
        'prefer-numeric-literals': [
            'error',
        ],
        'prefer-rest-params': [
            'error',
        ],
        'prefer-spread': [
            'error',
        ],
        'prefer-template': [
            'error',
        ],
        'rest-spread-spacing': [
            'error',
            'never',
        ],
        'symbol-description': [
            'error',
        ],
        'template-curly-spacing': [
            'error',
            'never',
        ],
        'yield-star-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
    };
};

module.exports = {
    createRulesList,
};
