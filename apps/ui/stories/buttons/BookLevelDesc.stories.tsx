import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { BookLevelDesc } from "./BookLevelDesc";

export default {
  title: "Books/Description",
  component: BookLevelDesc,
  decorators: [withDesign],
  argTypes: {
    level: {
      options: ["RA", "RB", "RT"],
      control: { type: "radio" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DbedMcLjbxQVtpwS4sP4HE/Admin(%ED%86%B5%ED%95%A9%EA%B4%80%EB%A6%AC%EC%9E%90)-template?node-id=28%3A7693",
      // url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
} as ComponentMeta<typeof BookLevelDesc>;

const Template: ComponentStory<typeof BookLevelDesc> = (args) => (
  <BookLevelDesc {...args} />
);
export const Default = Template.bind({});
Default.args = {
  level: "RA",
};
