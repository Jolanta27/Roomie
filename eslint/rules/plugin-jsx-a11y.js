// Note: based on ruleset available in eslint-plugin-jsx-a11y 6.3.x

/**
 * @param {import("../create").CreateRulesListParams} _params
 */
 const createRulesList = (_params) => {

    return {
        // JSX A11Y
        // --------
        // Use `error` setting only for straight-forward rules & rules used by CRA.
        // For rules with unclear meaning, either set `warn` or `off` to prevent dev confusion.

        // Available, but not enabled:
        //
        // jsx-a11y/accessible-emoji (deprecated)

        // No rules enabled by plugin:jsx-a11y/recommended

        'jsx-a11y/alt-text': [
            'error',
        ],
        'jsx-a11y/anchor-has-content': [
            'error',
        ],
        'jsx-a11y/anchor-is-valid': [
            'error',
        ],
        'jsx-a11y/aria-activedescendant-has-tabindex': [
            'error',
        ],
        'jsx-a11y/aria-props': [
            'error',
        ],
        'jsx-a11y/aria-proptypes': [
            'error',
        ],
        'jsx-a11y/aria-role': [
            'error',
            {
                'ignoreNonDOM': true,
            },
        ],
        'jsx-a11y/aria-unsupported-elements': [
            'error',
        ],
        'jsx-a11y/autocomplete-valid': [
            'error',
        ],
        'jsx-a11y/click-events-have-key-events': [
            'error',
        ],
        'jsx-a11y/heading-has-content': [
            'error',
        ],
        'jsx-a11y/html-has-lang': [
            'error',
        ],
        'jsx-a11y/iframe-has-title': [
            'error',
        ],
        'jsx-a11y/img-redundant-alt': [
            'error',
        ],
        'jsx-a11y/interactive-supports-focus': [
            'warn',
        ],
        'jsx-a11y/label-has-associated-control': [
            // Note: this one is most likely hard to achieve,
            // since ID's are supposed to be non-random.
            'warn',
        ],
        'jsx-a11y/lang': [
            'error',
        ],
        'jsx-a11y/media-has-caption': [
            'error',
        ],
        'jsx-a11y/mouse-events-have-key-events': [
            'warn',
        ],
        'jsx-a11y/no-access-key': [
            'error',
        ],
        'jsx-a11y/no-autofocus': [
            'error',
            {
                'ignoreNonDOM': true,
            },
        ],
        'jsx-a11y/no-distracting-elements': [
            'error',
        ],
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
            'warn',
            {
                'tr': [
                    'none',
                    'presentation',
                ],
            },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
            'warn',
            {
                'handlers': [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
            },
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            'warn',
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
            'warn',
        ],
        'jsx-a11y/no-onchange': [
            'warn',
        ],
        'jsx-a11y/no-redundant-roles': [
            'error',
            {
                'nav': [
                    'navigation',
                ],
            },
        ],
        'jsx-a11y/no-static-element-interactions': [
            'warn',
        ],
        'jsx-a11y/role-has-required-aria-props': [
            'error',
        ],
        'jsx-a11y/role-supports-aria-props': [
            'error',
        ],
        'jsx-a11y/scope': [
            'error',
        ],
        'jsx-a11y/tabindex-no-positive': [
            'warn',
        ],
    };
};

module.exports = {
    createRulesList,
};
