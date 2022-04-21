import React from "react";
import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Button/Default',
    component: Button,
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button> = (args) => <Button {...args} />
export const RA = Template.bind({})
RA.args = {
    active: false,
    label: '책과 만나요',
};