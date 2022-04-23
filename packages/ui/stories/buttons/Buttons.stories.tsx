import React from "react";
import {Buttons} from "./Buttons";

import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Button/Sets",
    component: Buttons
} as ComponentMeta<typeof Buttons>

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />

export const PAIR = Template.bind({})
PAIR.args = {

}