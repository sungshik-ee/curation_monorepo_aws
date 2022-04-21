import React from "react";
import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Button/Default',
    component: Button,
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button> = (args) => <Button {...args} />
export const RED = Template.bind({})
RED.args = {
    active: false,
    label: '책과 만나요 단계',
};

export const BLUE = Template.bind({})
BLUE.args = {
    activeType: 'blue',
    label: '책과 만나요 단계',
}