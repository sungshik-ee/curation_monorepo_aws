import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';

const theme1 = create({
    base: 'light',
    brandTitle: 'Styled Component Theme',
});
const theme2 = create({
    base: 'dark',
    brandTitle: 'Styled Component Theme',
});

addDecorator(withThemes(ThemeProvider, [theme1, theme2]));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: { viewports: INITIAL_VIEWPORTS },
    // layout: 'centered',
};
