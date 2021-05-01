// Note: based on ruleset available in eslint-plugin-react 7.20.x
// Note: based on ruleset available in eslint-plugin-react-hooks 4.0.x

/**
 * @param {import("../create").CreateRulesListParams} _params
 */
const createRulesList = (_params) => {
    /**
     * Important notes
     * ---------------
     *
     * - Stylistic rules reside in a separate creator function
     *
     */

    return {
        // React
        // -----

        // Available, but not enabled:
        //
        // react/boolean-prop-naming (propTypes unused with TypeScript)
        // react/default-props-match-prop-types (defaultProps unused with TypeScript)
        // react/destructuring-assignment
        // react/display-name
        // react/forbid-component-props (no forbidden component props)
        // react/forbid-dom-props (no forbidden DOM props)
        // react/forbid-elements (no forbidden elements)
        // react/forbid-foreign-prop-types (propTypes unused with TypeScript)
        // react/forbid-prop-types (propTypes unused with TypeScript)
        // react/function-component-definition (no preferred style)
        //      (TODO: consider enabling)
        // react/no-adjacent-inline-elements
        // react/no-set-state
        // react/no-unused-prop-types (propTypes unused with TypeScript)
        // react/prefer-read-only-props (applies to Flow only)
        // react/prop-types (propTypes unused with TypeScript)
        // react/require-default-props (defaultProps unused with TypeScript)
        // react/sort-comp
        // react/sort-prop-types
        // react/state-in-constructor
        // react/static-property-placement

        // No rules enabled by plugin:react/recommended

        'react/button-has-type': [
            'error',
        ],
        'react/no-access-state-in-setstate': [
            'error',
        ],
        'react/no-array-index-key': [
            'error',
        ],
        'react/no-children-prop': [
            'error',
        ],
        'react/no-danger': [
            'error',
        ],
        'react/no-danger-with-children': [
            'error',
        ],
        'react/no-deprecated': [
            'error',
        ],
        'react/no-did-mount-set-state': [
            'error',
        ],
        'react/no-did-update-set-state': [
            'error',
        ],
        'react/no-direct-mutation-state': [
            'error',
        ],
        'react/no-find-dom-node': [
            'error',
        ],
        'react/no-is-mounted': [
            'error',
        ],
        'react/no-multi-comp': [
            'error',
            {
                'ignoreStateless': false,
            },
        ],
        'react/no-redundant-should-component-update': [
            'error',
        ],
        'react/no-render-return-value': [
            'error',
        ],
        'react/no-string-refs': [
            'error',
            {
                'noTemplateLiterals': true,
            },
        ],
        'react/no-this-in-sfc': [
            'error',
        ],
        'react/no-typos': [
            'error',
        ],
        'react/no-unescaped-entities': [
            'error',
        ],
        'react/no-unknown-property': [
            'error',
            {
                'ignore': [
                    // Preact only
                    // 'class'
                ],
            },
        ],
        'react/no-unsafe': [
            'error',
            {
                'checkAliases': true,
            },
        ],
        'react/no-unused-state': [
            'error',
        ],
        'react/no-will-update-set-state': [
            'error',
        ],
        'react/prefer-es6-class': [
            // Enabled for cases when FC cannot be used
            'error',
            'always',
        ],
        'react/prefer-stateless-function': [
            'error',
            {
                'ignorePureComponents': true,
            },
        ],
        'react/react-in-jsx-scope': [
            'error',
        ],
        'react/require-optimization': [
            'warn',
        ],
        'react/require-render-return': [
            'error',
        ],
        'react/self-closing-comp': [
            'error',
        ],
        'react/style-prop-object': [
            'error',
        ],
        'react/void-dom-elements-no-children': [
            'error',
        ],


        // React - JSX-specific rules
        // --------------------------

        // Available, but not enabled:
        //
        // react/jsx-no-literals
        // react/jsx-no-undef (already checked by TypeScript)
        // react/jsx-props-no-multi-spaces (already covered by 'no-multi-spaces')
        // react/jsx-props-no-spreading (type checking covered by TypeScript)
        // react/jsx-sort-default-props (defaultProps unused with TypeScript)
        // react/jsx-sort-props
        // react/jsx-max-depth
        // react/jsx-newline
        // react/jsx-no-useless-fragment
        //      (reports false positives for arrays,
        //      cannot be fixed without integration with eg. TypeScript on rule level)

        // No rules enabled by plugin:react/recommended

        'react/jsx-boolean-value': [
            'error',
            'never',
        ],
        'react/jsx-child-element-spacing': [
            'error',
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': [ '.jsx', '.tsx' ],
            },
        ],
        'react/jsx-fragments': [
            // Even though it enforces shorthand syntax,
            // keyed element fragments are still accepted by this rule
            'error',
            'syntax',
        ],
        'react/jsx-handler-names': [
            'error',
            {
                'eventHandlerPrefix': 'handle',
                'eventHandlerPropPrefix': 'on',
                'checkLocalVariables': true,
            },
        ],
        'react/jsx-key': [
            'error',
            {
                'checkFragmentShorthand': true,
                'checkKeyMustBeforeSpread': true,
            },
        ],
        'react/jsx-no-bind': [
            'error',
        ],
        'react/jsx-no-comment-textnodes': [
            'error',
        ],
        'react/jsx-no-constructed-context-values': [
            'error',
        ],
        'react/jsx-no-duplicate-props': [
            'error',
        ],
        'react/jsx-no-script-url': [
            'error',
            [
                // Place custom components here
                // (ones that should be checked alongside with regular link components)
            ],
        ],
        'react/jsx-no-target-blank': [
            'error',
            {
                'enforceDynamicLinks': 'always',
                'warnOnSpreadAttributes': true,
            },
        ],
        'react/jsx-uses-react': [
            'error',
        ],
        'react/jsx-uses-vars': [
            'error',
        ],


        // React - Hooks
        // -------------

        'react-hooks/rules-of-hooks': [
            'error',
        ],
        'react-hooks/exhaustive-deps': [
            // Warning only
            'warn',
        ],
    };
};

module.exports = {
    createRulesList,
};
