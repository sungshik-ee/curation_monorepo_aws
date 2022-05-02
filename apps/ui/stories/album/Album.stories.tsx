import React from 'react';
import { Album } from './Album';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Album/Default',
    component: Album,
} as ComponentMeta<typeof Album>;

const Template: ComponentStory<typeof Album> = (args) => <Album {...args} />;
export const Default = Template.bind({});
Default.args = {
    image: '/thumbnail-blue.png',
    title: 'Around the World',
    author: 'Foo Foo',
    info: '2022-04-21 8 SONGS',
};
