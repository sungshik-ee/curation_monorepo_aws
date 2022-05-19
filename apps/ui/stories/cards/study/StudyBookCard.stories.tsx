import React from 'react';
import { StudyBookCard } from './StudyBookCard';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체메뉴/카드',
    component: StudyBookCard,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
};

const Template: ComponentStory<typeof StudyBookCard> = (args) => <StudyBookCard {...args} />;

export const 한글국어 = Template.bind({});
한글국어.args = {};
