import React from "react";
import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest"

export default {
    title: 'Button/Simple',
    component: Button,
    argTypes: {
        onClick: {action: '버튼 클릭됨'},
        activeType: {
            options: ['RED', 'BLUE'],
            control: {type: 'radio'}
            // control: {type: 'select'}
            // table: {category: 'Sizes'}
        }
    }
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button> = (args) => <Button {...args} />
export const RED = Template.bind({})
RED.args = {
    active: false,
    activeType: "RED",
    label: '책과 만나요 단계',
};
RED.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');

    await expect(canvas.getByText("책과 만나요 단계")).toBe(button)

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
};