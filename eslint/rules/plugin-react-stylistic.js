// Note: based on ruleset available in eslint-plugin-react 7.20.x
// Note: based on ruleset available in eslint-plugin-react-hooks 4.0.x

/**
 * @param {import("../create").CreateRulesListParams} params
 */
 const createRulesList = (params) => {
    return {
        // React - JSX-specific rules
        // --------------------------

        'react/jsx-closing-bracket-location': [
            'error',
            'line-aligned',
        ],
        'react/jsx-closing-tag-location': [
            'error',
            {
                'props': 'never',
                'children': 'never',
            },
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            {
                'props': 'never',
                'children': 'never',
            },
        ],
        'react/jsx-curly-newline': [
            'error',
            'consistent',
        ],
        'react/jsx-curly-spacing': [
            'error',
            {
                'when': 'never',
                'spacing': {
                    'objectLiterals': 'always',
                },
            },
        ],
        'react/jsx-equals-spacing': [
            'error',
            'never',
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline',
        ],
        'react/jsx-indent': [
            'error',
            params.indentSpaces,
            {
                'checkAttributes': true,
                'indentLogicalExpressions': true,
            },
        ],
        'react/jsx-indent-props': [
            'error',
            params.indentSpaces,
        ],
        'react/jsx-max-props-per-line': [
            'error',
            {
                'maximum': 1,
                'when': 'always',
            },
        ],
        'react/jsx-one-expression-per-line': [
            'error',
        ],
        'react/jsx-pascal-case': [
            'error',
            {
                'allowAllCaps': false,
                'ignore': [],
            },
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                'closingSlash': 'never',
                'beforeSelfClosing': 'always',
                'afterOpening': 'never',
                'beforeClosing': 'never',
            },
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
            },
        ],
    };
};

module.exports = {
    createRulesList,
};
