// Note: based on ruleset available in eslint-plugin-import 2.22.x

/**
 * @param {import("../create").CreateRulesListParams} _params
 */
const createRulesList = (_params) => {
    return {
        // Import
        // ------

        // Available, but not enabled:
        //
        // import/no-unresolved
        // import/named
        // import/default
        // import/namespace
        // import/no-restricted-paths (no exclusion zones)
        // import/no-internal-modules
        // import/no-internal-modules
        //      (TODO: consider enabling this once the project's structure is fixed)
        // import/no-relative-parent-imports
        //      (TODO: consider enabling this once the project's structure is fixed)
        //
        // import/export
        // import/no-named-as-default
        // import/no-named-as-default-member
        // import/no-mutable-exports
        //
        // import/unambiguous
        //
        // import/exports-last
        // import/no-duplicates
        // import/no-namespace
        // import/extensions
        // import/newline-after-import (already covered by 'padding-line-between-statements')
        // import/prefer-default-export (superseded by 'import/no-default-export')
        // import/max-dependencies
        // import/no-named-default ('import/no-default-export')
        // import/no-named-export (inverse of 'import/no-default-export')
        // import/no-anonymous-default-export ('import/no-default-export')
        // import/group-exports
        // import/dynamic-import-chunkname

        // Static analysis
        'import/no-absolute-path': [
            'error',
        ],
        'import/no-dynamic-require': [
            'error',
        ],
        'import/no-self-import': [
            'error',
        ],
        'import/no-cycle': [
            'error',
            {
                'maxDepth': 10,
                'ignoreExternal': true,
            },
        ],
        'import/no-useless-path-segments': [
            'error',
            {
                'noUselessIndex': true,
            },
        ],

        // Helpful warnings
        'import/no-deprecated': [
            'error',
        ],
        'import/no-extraneous-dependencies': [
            'error',
        ],

        // Module systems
        'import/no-commonjs': [
            'error',
        ],
        'import/no-amd': [
            'error',
        ],
        'import/no-nodejs-modules': [
            'error',
        ],

        // Style guide
        'import/first': [
            'error',
        ],
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'unknown',
                ],
                'newlines-between': 'always',
                'pathGroups': [
                    {
                        'pattern': '~/**',
                        'group': 'internal',
                    },
                ],
                'pathGroupsExcludedImportTypes': [ 'builtin' ],
            },
        ],
        'import/no-unassigned-import': [
            'error',
            {
                'allow': [
                    '**/*.css',
                ],
            },
        ],
        'import/no-default-export': [
            'error',
        ],
    };
};

module.exports = {
    createRulesList,
};
