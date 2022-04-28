import React from "react";
import { LoginForm } from "./LoginForm";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Forms/Login",
  component: LoginForm,
  argTypes: {
    onSelect: { action: "선택 변경됨" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selectedLevel: "RA",
};
