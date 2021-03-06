const path = require('path');
module.exports = {
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@react-theming/storybook-addon',
        '@storybook/addon-storysource',
        'storybook-addon-designs',
    ],
    staticDirs: ['../public'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    features: {
        interactionsDebugger: true,
    },
    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.(j|t)sx?$/,
            use: ['babel-loader'],
            include: [path.join(__dirname, '../core')],
        });

        // Return the altered config
        return config;
    },
};
