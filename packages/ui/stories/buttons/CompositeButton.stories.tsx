import React from "react"
import {CompositeButton} from "./CompositeButton";
import {IntroButton} from "./IntroButton";

export default {
    title: 'Button/CompositeButton',
    component: CompositeButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <CompositeButton {...args} />;
export const ButtonSets = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonSets.args = {
    active: false,
    label: '책과 만나요',
};

