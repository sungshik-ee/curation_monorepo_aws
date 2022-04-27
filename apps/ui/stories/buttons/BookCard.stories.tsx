import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { BookCard } from "./BookCard";

export default {
  title: "Books/BookCard",
  component: BookCard,
  argTypes: {
    level: {
      options: ["RA", "RB", "RT"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);
export const Default = Template.bind({});
Default.args = {
  level: "RA",
};
