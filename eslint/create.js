/**
 * @typedef {Object} CreateRulesListParams
 *      createESLintConfig() parameters.
 * @property {number} indentSpaces
 *      Number of space characters to be used for indentations.
 * @property {number} maxLineWidth
 *      Line width limit to trigger an error and force line break.
 * @property {string=} usedTypeScriptVersion
 *      Semver formatted version of TypeScript used by the consuming project.
 * @property {RestrictedImportsParams=} restrictedImports
 *      Optional parameters related to "import restrictions" configuration.
 * @property {NamingConventionsParams=} namingConventions
 *      Optional parameters related to "naming conventions" configuration.
 * @property {RulesParams=} rulesParams
 *      Optional configuration object related to various rules' configuration.
 * @property {boolean=} disableTypeScriptIntegration
 *      Optional parameter to disable TypeScript rules, in cases where TypeScript
 *      is not used in a project, therefore TS compiler is unavailable.
 *      Using this flag will prevent ESLint errors because of missing dependencies.
 * @property {boolean=} disableReactIntegration
 *      Optional parameter to disable React-related rules, in cases where React
 *      is not used in a project. Useful to get rid of CLI warnings.
 * @property {TransformationsOptions=} transformations
 *      Optional transformation options applied to specific regions, available for convenience.
 */

/**
 * @typedef {Object} RestrictedImportsParams
 *      Parameters related to "import restrictions" configuration.
 * @property {boolean=} isPrivateModulesRestrictionEnabled
 *      Prevents imports of private modules from being used.
 *      Private modules are all files that are imported using the project's root alias
 *      (`~/`) and are suffixed with `.private` filename ending.
 *      These files should only be used within their respective module (or test files),
 *      where relative imports are preferred.
 *
 *      (eg. import of `~/common/modules/myModule/someUtilFunction.private.ts` is forbidden).
 */

/**
 * @typedef {Object} NamingConventionsParams
 *      Parameters related to "naming conventions" configuration.
 * @property {boolean=} isBooleanFlagsPrefixingEnabled
 *      Enforces a strict naming convention for boolean flags, where any
 *      boolean-typed variable, property, accessor or function parameter
 *      must be prefixed by one of the boolean indicating prefixes.
 *
 *      Recognised prefixes: 'is', 'should', 'has', 'can', 'did', 'will'.
 *
 *      Note: this convention is rather experimental and has some issues with
 *      external libraries & APIs,
 *      see: https://github.com/typescript-eslint/typescript-eslint/issues/2244
 *      Therefore, for a time being, this convention is opt-in.
 */

/**
 * @typedef {Object} RulesParams
 *     Parameters related to various rules' configuration.
 * @property {boolean=} isExplicitModuleBoundaryReturnTypeEnabled
 *     Enables TypeScript's `@typescript-eslint/explicit-module-boundary-types` rule
 *     at the default recommended severity level (warn).
 */

/**
 * @typedef {[ string, ...unknown[] ]} RuleDef
 * @typedef {Record<string, RuleDef>} RulesList
 * @typedef {(rules: RulesList) => RulesList} TransformationFunction
 */

/**
 * @typedef {Object} TransformationsOptions
 *     Transformation options applied to specific regions, available for convenience.
 * @property {TransformationFunction=} javascriptTransformer
 *      Transforms all JavaScript rules (applied to all files by default).
 *      This transformer sees React-related rules as well.
 * @property {TransformationFunction=} typescriptTransformer
 *      Transforms all TypeScript rules (applied to all .ts / .tsx files).
 * @property {TransformationFunction=} reactTransformer
 *      Transforms all React rules.
 */

const { createRulesList: createESLintRulesList } = require('./rules/eslint');
const { createRulesList: createESLintStylisticRulesList } = require('./rules/eslint-stylistic');
const { createRulesList: createTypeScriptRulesList } = require('./rules/typescript-eslint');
const { createRulesList: createTypeScriptStylisticRulesList } = require('./rules/typescript-eslint-stylistic');
const { createRulesList: createPluginReactRulesList } = require('./rules/plugin-react');
const { createRulesList: createPluginReactStylisticRulesList } = require('./rules/plugin-react-stylistic');
const { createRulesList: createPluginJSXA11YRulesList } = require('./rules/plugin-jsx-a11y');
const { createRulesList: createPluginImportRulesList } = require('./rules/plugin-import');

/**
   * @param {CreateRulesListParams} params
   */
const createESLintConfig = (params) => {
    const {
        javascriptTransformer,
        reactTransformer,
        typescriptTransformer,
    } = params.transformations || {};

    return {
        'root': true,
        'env': {
            'browser': true,
            'es2020': true,
        },
        'extends': [
            'eslint:recommended',
        ],
        'parserOptions': {
            'ecmaFeatures': {
                'jsx': true,
            },
            'ecmaVersion': 2020,
            'sourceType': 'module',
        },
        'settings': {
            ...(
                !params.disableReactIntegration ?
                    {
                        'react': {
                            'version': 'detect',
                            // 'pragma': 'h',
                        },
                    } :
                    {}
            ),
            'import/extensions': [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
            ],
        },
        'plugins': [
            ...(
                !params.disableReactIntegration ?
                    [
                        'react',
                        'react-hooks',
                        'jsx-a11y',
                    ] :
                    []
            ),
            'import',
        ],
        'rules': (() => {
            const reactRules = (() => {
                if (params.disableReactIntegration) {
                    return {};
                }

                const rules = {
                    ...createPluginReactRulesList(params),
                    ...createPluginReactStylisticRulesList(params),
                    ...createPluginJSXA11YRulesList(params),
                };

                if (!reactTransformer) {
                    return rules;
                }

                // @ts-ignore
                return reactTransformer(rules);
            })();

            const rules = {
                ...createESLintRulesList(params),
                ...createESLintStylisticRulesList(params),
                ...reactRules,
                ...createPluginImportRulesList(params),
            };

            if (!javascriptTransformer) {
                return rules;
            }

            // @ts-ignore
            return javascriptTransformer(rules);
        })(),
        'overrides': [
            {
                // Overrides for test files.
                'files': [
                    '**/__tests__/**/*.*',
                    '**/*.test.js?(x)',
                    '**/*.test.ts?(x)',
                ],
                'env': {
                    'jest': true,
                },
                'rules': {
                    ...(
                        !params.disableReactIntegration ?
                            {
                                'react/no-multi-comp': [
                                    'off',
                                ],
                            } :
                            {}
                    ),
                },
            },
            {
                // Overrides for non-source files.
                'files': [ '!src/**/*.*' ],
                'env': {
                    'node': true,
                },
                'rules': {
                    'import/no-commonjs': [
                        'off',
                    ],
                },
            },
            ...(
                !params.disableTypeScriptIntegration ?
                    [
                        {
                            // Overrides for TypeScript files
                            'files': [ '**/*.ts?(x)' ],
                            'parser': '@typescript-eslint/parser',
                            'parserOptions': {
                                'ecmaFeatures': {
                                    'jsx': true,
                                },
                                'ecmaVersion': 2020,
                                'sourceType': 'module',
                                'project': './tsconfig.json',
                            },
                            'extends': [
                                'plugin:@typescript-eslint/recommended',
                                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                            ],
                            'settings': {
                                'import/parsers': {
                                    '@typescript-eslint/parser': [
                                        '.ts',
                                        '.tsx',
                                    ],
                                },
                            },
                            'plugins': [
                                '@typescript-eslint',
                            ],
                            'rules': (() => {
                                const rules = {
                                    ...createTypeScriptRulesList(params),
                                    ...createTypeScriptStylisticRulesList(params),
                                };

                                if (!typescriptTransformer) {
                                    return rules;
                                }

                                // @ts-ignore
                                return typescriptTransformer(rules);
                            })(),
                        },
                    ] :
                    []
            ),
        ],
    };
};

module.exports = {
    createESLintConfig,
};

