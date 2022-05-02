import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';
import withAxiosDecorator from 'storybook-axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { getAxios } from '@DanbiEduCorp/core/src/axios';
import axios from 'axios';
import React from 'react';

const theme1 = create({
    base: 'light',
    brandTitle: 'Styled Component Theme',
});
const theme2 = create({
    base: 'dark',
    brandTitle: 'Styled Component Theme',
});

const axiosInstance = axios.create({
    // TODO : env로 설정
    baseURL: 'http://server.local.danbi:8080',
});
const queryClient = new QueryClient();

addDecorator(withThemes(ThemeProvider, [theme1, theme2]));

addDecorator(withAxiosDecorator(axiosInstance));

addDecorator((story) => (
    <QueryClientProvider client={queryClient}>
        {story()}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: { viewports: INITIAL_VIEWPORTS },
};
