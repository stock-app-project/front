import { Meta, StoryFn } from "@storybook/react";
import Button from ".";

export default {
  title: "Components/Button", // story 이름
  component: Button,
  argTypes: {
    fullWidth: { control: "boolean" },
    rounded: { control: "boolean" },
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
  size: "small",
  fullWidth: true,
  rounded: false,
}; // Small의 props 지정

Medium.args = {
  size: "medium",
  fullWidth: false,
  rounded: true,
}; // Medium props 지정

Large.args = {
  size: "large",
  fullWidth: false,
  rounded: false,
}; // Large props 지정