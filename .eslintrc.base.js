const { createESLintConfig } = require('./eslint/create');

const indentSpaces = 4;
const maxLineWidth = 120;

const baseConfig = createESLintConfig({
    indentSpaces,
    maxLineWidth,
    restrictedImports: {
        isPrivateModulesRestrictionEnabled: true,
    },
    usedTypeScriptVersion: '4.1.0',
});

const projectConfig = {};

module.exports = {
    ...baseConfig,
    ...projectConfig,
};
