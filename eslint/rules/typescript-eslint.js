// Note: based on ruleset available in eslint 7.7.x
// Note: based on ruleset available in typescript-eslint 3.9.x

/**
 * @param {import("../create").CreateRulesListParams} params
 */

const createRulesList = (params) => {
    const { isBooleanFlagsPrefixingEnabled } = params.namingConventions || {};
    const { isExplicitModuleBoundaryReturnTypeEnabled } = params.rulesParams || {};

    /**
     * Important notes
     * ---------------
     *
     * - Stylistic rules reside in a separate creator function
     *
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
        'default-param-last': [ 'off' ],
        'no-dupe-class-members': [ 'off' ],
        'no-duplicate-imports': [ 'off' ],
        'no-empty-function': [ 'off' ],
        'no-extra-parens': [ 'off' ],
        'no-extra-semi': [ 'off' ],
        'no-invalid-this': [ 'off' ],
        'no-loop-func': [ 'off' ],
        'no-loss-of-precision': [ 'off' ],
        'no-magic-numbers': [ 'off' ],
        'no-redeclare': [ 'off' ],
        'no-shadow': [ 'off' ],
        'no-unused-expressions': [ 'off' ],
        'no-unused-vars': [ 'off' ],
        'no-useless-constructor': [ 'off' ],
        'object-curly-spacing': [ 'off' ],
        'no-use-before-define': [ 'off' ],
        'space-infix-ops': [ 'off' ],

        // Second, re-enable TypeScript-enhanced ESLint rules
        '@typescript-eslint/no-dupe-class-members': [
            'error',
        ],
        '@typescript-eslint/no-duplicate-imports': [
            'error',
            {
                'includeExports': true,
            },
        ],
        '@typescript-eslint/no-empty-function': [
            // Warning only
            'warn',
            {
                'allow': [
                    'protected-constructors',
                    'private-constructors',
                    'decoratedFunctions',
                ],
            },
        ],
        '@typescript-eslint/no-extra-parens': [
            // Disabled, using additional parens is highly valuable in terms of
            // code readability
            'off',
        ],
        '@typescript-eslint/no-invalid-this': [
            'error',
            {
                'capIsConstructor': false,
            },
        ],
        '@typescript-eslint/no-loop-func': [
            'error',
        ],
        '@typescript-eslint/no-loss-of-precision': [
            'error',
        ],
        '@typescript-eslint/no-magic-numbers': [
            // Warning only
            'warn',
            {
                'ignore': [ -1, 0, 1 ],
                'ignoreArrayIndexes': false,
                'enforceConst': true,
                'detectObjects': false,
                'ignoreNumericLiteralTypes': true,
                'ignoreReadonlyClassProperties': true,
                'ignoreEnums': true,
            },
        ],
        '@typescript-eslint/no-redeclare': [
            'error',
            {
                // Disallow declaration merging
                'ignoreDeclarationMerge': false,
            },
        ],
        '@typescript-eslint/no-shadow': [
            'error',
            {
                // Disallow using same names for types & variables
                'ignoreTypeValueShadow': false,
                // Disallow shadowing of upper scope names when creating Function Type declarations
                // eg. `type Fun = (test: string) => string;`
                'ignoreFunctionTypeParameterNameValueShadow': false,
            },
        ],
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': false,
                'allowTernary': false,
                'allowTaggedTemplates': false,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            // Overrides plugin:@typescript-eslint/recommended
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
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                'enums': true,
                'typedefs': true,
                'ignoreTypeReferences': false,
            },
        ],
        '@typescript-eslint/no-useless-constructor': [
            'error',
        ],
        '@typescript-eslint/object-curly-spacing': [
            'error',
            'always',
        ],
        '@typescript-eslint/space-infix-ops': [
            'error',
        ],

        // TypeScript - ESLint equivalents (require type checking)
        // -------------------------------------------------------

        // Available, but not enabled:
        //
        // @typescript-eslint/return-await

        // First, explicitly disable ESLint equivalents
        'dot-notation': [ 'off' ],
        'require-await': [ 'off' ],
        'no-throw-literal': [ 'off' ],

        // Second, re-enable TypeScript-enhanced ESLint rules
        '@typescript-eslint/dot-notation': [
            'error',
        ],
        '@typescript-eslint/require-await': [
            // Overrides plugin:@typescript-eslint/recommended-requiring-type-checking
            'off',
        ],
        '@typescript-eslint/no-throw-literal': [
            'error',
        ],


        // TypeScript - TS specific (no type checking)
        // --------------------------------------------------

        // Available, but not enabled:
        //
        // @typescript-eslint/array-type
        // @typescript-eslint/ban-tslint-comment
        //      (this codebase has never used TSLint, therefore the rule is not needed)
        // @typescript-eslint/consistent-type-definitions
        //      (interface & type are not always equivalent)
        // @typescript-eslint/consistent-type-imports
        //      (we haven't used type-only exports/imports, so no strong opinion on this has been made)
        // @typescript-eslint/explicit-function-return-type
        //      (in most cases, it's less noisy to rely on inference)
        //      (in case of boundary-crossing entities, see: @typescript-eslint/explicit-module-boundary-types)
        // @typescript-eslint/explicit-member-accessibility
        //      (classes are rarely used in React-hooks world)
        // @typescript-eslint/no-invalid-void-type
        // @typescript-eslint/no-parameter-properties
        //      (classes are rarely used in React-hooks world)
        // @typescript-eslint/no-type-alias
        // @typescript-eslint/no-unnecessary-type-constraint
        //      (problems with typescript-eslint/comma-dangle)
        // @typescript-eslint/prefer-for-of
        //      (Handled by 'no-restricted-syntax',
        //      ForOfStatement is forbidden)
        // @typescript-eslint/typedef
        // @typescript-eslint/unified-signatures

        // Enabled by plugin:@typescript-eslint/recommended:
        //
        // @typescript-eslint/adjacent-overload-signatures
        // @typescript-eslint/explicit-module-boundary-types
        //      (more relaxed version of @typescript-eslint/explicit-function-return-type)
        //      (recommendation at `warn` level)
        //      (@configurable)
        // @typescript-eslint/no-empty-interface
        // @typescript-eslint/no-extra-non-null-assertion
        // @typescript-eslint/no-inferrable-types
        // @typescript-eslint/no-misused-new
        // @typescript-eslint/no-namespace
        // @typescript-eslint/no-non-null-asserted-optional-chain
        // @typescript-eslint/no-this-alias
        // @typescript-eslint/prefer-namespace-keyword
        // @typescript-eslint/triple-slash-reference

        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                // Use default configuration, which is:
                // 'ts-expect-error': 'allow-with-description',
                // 'ts-ignore': true,
                // 'ts-nocheck': true,
                // 'ts-check': false
            },
        ],
        '@typescript-eslint/ban-types': [
            'error',
            // Uses the recommended set of banned types:
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md#default-options
            // Additional types can be added using `extendDefaults` property.
        ],
        '@typescript-eslint/consistent-indexed-object-style': [
            // TODO: Enable with Record<...> enforcement in the next version
            'off',
        ],
        '@typescript-eslint/consistent-type-assertions': [
            // TODO: Plugin's author wants to replace this with `no-angle-bracket-assertions`,
            // but it's not available yet.
            'error',
            {
                'assertionStyle': 'as',
                'objectLiteralTypeAssertions': 'never',
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'semi',
                    'requireLast': true,
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            // Uses the default configuration:
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md#default-configuration
            // Note: field functions are treated the same as any other fields,
            // because they are not member methods of an interface
        ],
        '@typescript-eslint/no-confusing-non-null-assertion': [
            // Even though non-null assertions are forbidden,
            // leave this enabled just in case someone purposefully lifts the restriction.
            'error',
        ],
        '@typescript-eslint/no-dynamic-delete': [
            'error',
        ],
        '@typescript-eslint/no-explicit-any': [
            // Recommended by default, however only at `warn` level.
            'error',
            {
                'fixToUnknown': true,
                'ignoreRestArgs': false,
            },
        ],
        '@typescript-eslint/no-extraneous-class': [
            'error',
        ],
        '@typescript-eslint/no-non-null-assertion': [
            // Completely forbid non-null assertions,
            // because this feature defeats the purpose of strict null-checks.
            // Recommended by default, however only at `warn` level.
            'error',
        ],
        '@typescript-eslint/no-require-imports': [
            // If needed for some reason, use:
            // > eslint-disable-next-line @typescript-eslint/no-require-imports
            'error',
        ],
        '@typescript-eslint/no-var-requires': [
            // If needed for some reason, use:
            // > eslint-disable-next-line @typescript-eslint/no-var-requires
            'error',
        ],
        '@typescript-eslint/prefer-as-const': [
            // Recommended by default, however only at `warn` level.
            'error',
        ],
        '@typescript-eslint/prefer-enum-initializers': [
            'error',
        ],
        '@typescript-eslint/prefer-function-type': [
            'error',
        ],
        '@typescript-eslint/prefer-literal-enum-member': [
            'error',
        ],
        '@typescript-eslint/prefer-optional-chain': [
            // Note (from docs): there are a few edge cases where this rule will false positive.
            // Use your best judgement when evaluating reported errors.
            'error',
        ],


        // TypeScript - TS specific (require type checking)
        // --------------------------------------------------

        // Available, but not enabled:
        //
        // @typescript-eslint/no-unnecessary-qualifier
        // @typescript-eslint/non-nullable-type-assertion-style
        //      (non-null assertions are forbidden)
        // @typescript-eslint/prefer-readonly
        //      (classes are rarely used in React-hooks world)
        // @typescript-eslint/prefer-readonly-parameter-types
        // @typescript-eslint/strict-boolean-expressions
        //      TODO: This rule has received a major rework in 3.0.0
        //      Reconsider its usage if its any good.

        // Enabled by plugin:@typescript-eslint/recommended-requiring-type-checking:
        //
        // @typescript-eslint/await-thenable
        // @typescript-eslint/no-floating-promises
        //      Plugin's defaults allow to use `void <YOUR_PROMISE>` to mark
        //      promises that are purposefully left unhandled.
        // @typescript-eslint/no-implied-eval
        // @typescript-eslint/no-misused-promises
        // @typescript-eslint/no-unnecessary-type-assertion
        // @typescript-eslint/no-unsafe-assignment
        // @typescript-eslint/no-unsafe-call
        // @typescript-eslint/no-unsafe-member-access
        // @typescript-eslint/no-unsafe-return
        // @typescript-eslint/prefer-regexp-exec
        // @typescript-eslint/restrict-template-expressions
        //      Use default settings, which allow only Numbers to be used without casting to String.
        // @typescript-eslint/unbound-method

        '@typescript-eslint/naming-convention': [
            // Note: these rules are a bit experimental.
            // If new patterns emerge, please try to add them here.
            'error',
            {
                // By default, we want all things to be camelCased
                'selector': 'default',
                'format': [ 'camelCase' ],
            },
            {
                // Allow anything unused to have a leading underscore.
                // Other rules & TS should catch forbidden unused things,
                // so no need to be strict about naming.
                'selector': 'default',
                'modifiers': [ 'unused' ],
                'format': [ 'camelCase' ],
                'leadingUnderscore': 'allow',
            },
            {
                'selector': 'default',
                'modifiers': [ 'destructured' ],
                'format': null,
                'leadingUnderscore': 'allowSingleOrDouble',
                'trailingUnderscore': 'allowSingleOrDouble',
            },
            {
                // Override for Constructor-like variables (eg. React components), which can be PascalCase.
                // Override for Constructor-like properties (eg. React components), which can be PascalCase.
                // TODO: determine whether this should stay "on".
                // Currently, naming-convention does not support distinction
                // between "usage" and "declaration" or properties.
                // See: https://github.com/typescript-eslint/typescript-eslint/issues/2244
                'selector': [ 'variable', 'property' ],
                'types': [ 'function' ],
                'format': [ 'camelCase', 'PascalCase' ],
            },
            {
                // Same as above, but allow leading underscores for unused
                'selector': [ 'variable', 'property' ],
                'types': [ 'function' ],
                'modifiers': [ 'unused' ],
                'format': [ 'camelCase', 'PascalCase' ],
                'leadingUnderscore': 'allow',
            },
            {
                // Same as above, but destructured, so most likely external
                'selector': [ 'variable', 'property' ],
                'types': [ 'function' ],
                'modifiers': [ 'destructured' ],
                'format': null,
                'leadingUnderscore': 'allowSingleOrDouble',
                'trailingUnderscore': 'allowSingleOrDouble',
            },
            {
                // Additional override for constant-like variables,
                // which should be allowed to be UPPER_CASE.
                // NOTE: object literals are currently unavailable in `types` specifier.
                // NOTE: in the future, we can consider using the same rule relaxation
                // for object properties & similar.
                'selector': 'variable',
                'modifiers': [ 'const' ],
                'types': [ 'boolean', 'string', 'number', 'array' ],
                'format': [ 'camelCase', 'UPPER_CASE' ],
            },
            {
                // Same as above, but allow leading underscores for unused
                'selector': 'variable',
                'modifiers': [ 'const', 'unused' ],
                'types': [ 'boolean', 'string', 'number', 'array' ],
                'format': [ 'camelCase', 'UPPER_CASE' ],
                'leadingUnderscore': 'allow',
            },
            {
                // Same as above, but destructured, so most likely external
                'selector': 'variable',
                'modifiers': [ 'destructured' ],
                'types': [ 'boolean', 'string', 'number', 'array' ],
                'format': null,
                'leadingUnderscore': 'allowSingleOrDouble',
                'trailingUnderscore': 'allowSingleOrDouble',
            },
            {
                // Same as above, but destructured & unused
                'selector': 'variable',
                'modifiers': [ 'destructured', 'unused' ],
                'types': [ 'boolean', 'string', 'number', 'array' ],
                'format': null,
                'leadingUnderscore': 'allowSingleOrDouble',
                'trailingUnderscore': 'allowSingleOrDouble',
            },
            ...(
                isBooleanFlagsPrefixingEnabled ?
                    [
                        {
                            // Override for boolean entities.
                            // Enforces boolean-like naming, to make it easier to spot that it is a `flag`.
                            // TODO: "naming-convention" does not support distinction
                            // between "usage" and "declaration" or properties.
                            // See: https://github.com/typescript-eslint/typescript-eslint/issues/2244
                            'selector': [ 'variable', 'property', 'accessor', 'parameter' ],
                            'types': [ 'boolean' ],
                            'format': [ 'PascalCase' ],
                            'prefix': [ 'is', 'should', 'has', 'can', 'did', 'will' ],
                        },
                        {
                            // Same as above, but allow leading underscores for unused
                            'selector': [ 'variable', 'property', 'accessor', 'parameter' ],
                            'types': [ 'boolean' ],
                            'modifiers': [ 'unused' ],
                            'format': [ 'PascalCase' ],
                            'prefix': [ 'is', 'should', 'has', 'can', 'did', 'will' ],
                            'leadingUnderscore': 'allow',
                        },
                        {
                            // Same as above, but allow leading underscores for unused
                            'selector': [ 'variable', 'property', 'accessor', 'parameter' ],
                            'types': [ 'boolean' ],
                            'modifiers': [ 'destructured' ],
                            'format': null,
                            'leadingUnderscore': 'allowSingleOrDouble',
                            'trailingUnderscore': 'allowSingleOrDouble',
                        },
                    ] :
                    []
            ),
            {
                // Types, interfaces, etc. should be PascalCased
                'selector': 'typeLike',
                'format': [ 'PascalCase' ],
            },
            {
                // Enum members' names should be PascalCased
                // Example:
                /**
                 * enum SomeEnum {
                 *     FirstMember = 'SomeEnum.FirstMember',
                 *     SecondMember = 'SomeEnum.SecondMember',
                 * }
                 */
                'selector': 'enumMember',
                'format': [ 'PascalCase' ],
            },
        ],
        '@typescript-eslint/no-base-to-string': [
            'error',
            // By default, ignores RegExp type
            // {
            //     'ignoredTypeNames': []
            // }
        ],
        '@typescript-eslint/no-confusing-void-expression': [
            // TODO: Reconsider enabling this rule
            'off',
            // Uses default options:
            // {
            //     'ignoreArrowShorthand': false,
            //     'ignoreVoidOperator': false,
            // },
        ],
        '@typescript-eslint/no-for-in-array': [
            // Handled by 'no-restricted-syntax',
            // ForInStatement is forbidden
            'off',
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
            'error',
            {
                'allowComparingNullableBooleansToTrue': false,
                'allowComparingNullableBooleansToFalse': false,
            },
        ],
        '@typescript-eslint/no-unnecessary-condition': [
            'error',
            {
                'allowConstantLoopConditions': false,
            },
        ],
        '@typescript-eslint/no-unnecessary-type-arguments': [
            'error',
        ],
        '@typescript-eslint/prefer-includes': [
            'error',
        ],
        '@typescript-eslint/prefer-nullish-coalescing': [
            'warn',
            {
                'ignoreConditionalTests': true,
                'ignoreMixedLogicalExpressions': true,
            },
        ],
        '@typescript-eslint/prefer-string-starts-ends-with': [
            'error',
        ],
        '@typescript-eslint/promise-function-async': [
            'error',
        ],
        '@typescript-eslint/require-array-sort-compare': [
            'error',
        ],
        '@typescript-eslint/restrict-plus-operands': [
            // Recommended by default,
            // however does not check compound assignment with default settings
            'error',
            {
                'checkCompoundAssignments': true,
            },
        ],
        '@typescript-eslint/switch-exhaustiveness-check': [
            'error',
        ],

        // TypeScript - Configurable rules
        ...(
            !isExplicitModuleBoundaryReturnTypeEnabled ?
                {
                    '@typescript-eslint/explicit-module-boundary-types': [
                        'off',
                    ],
                } :
                {}
        ),
    };
};

module.exports = {
    createRulesList,
};
